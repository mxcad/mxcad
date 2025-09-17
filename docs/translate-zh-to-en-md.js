const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');
const querystring = require('querystring');

// 百度翻译 API 配置
const BAIDU_TRANSLATE_CONFIG = {
    appid: '20230922001825895', // 替换为你的百度翻译 App ID
    appkey: 'UeUQKzvpZgp_wkyh5dyi', // 替换为你的百度翻译 App Key
    url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
};

// 递归删除目录
function deleteFolderRecursive(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
}

// 生成百度翻译 API 签名
function generateBaiduSignature(query, appid, appkey, salt) {
    const sign = crypto.createHash('md5').update(appid + query + salt + appkey).digest('hex');
    return sign;
}

// 调用百度翻译 API
function translateTextBatch(texts, targetLanguage = 'en') {
    const appid = BAIDU_TRANSLATE_CONFIG.appid;
    const appkey = BAIDU_TRANSLATE_CONFIG.appkey;
    const salt = Math.random().toString().substring(2, 10); // 随机数
    const q = texts.join('\n'); // 将多行文本合并为一个字符串
    const sign = generateBaiduSignature(q, appid, appkey, salt);

    const params = querystring.stringify({
        q,
        from: 'zh', // 源语言：中文
        to: targetLanguage, // 目标语言
        appid,
        salt,
        sign,
    });

    const options = {
        hostname: 'fanyi-api.baidu.com',
        path: '/api/trans/vip/translate?' + params,
        method: 'GET',
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.error_code) {
                        reject(new Error(`Baidu Translate API Error: ${response.error_msg}`));
                    } else {
                        const translatedLines = response.trans_result.map((item) => item.dst);
                        resolve(translatedLines);
                    }
                } catch (error) {
                    reject(new Error('Failed to parse Baidu Translate API response.'));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

// 读取 JSON 缓存
function loadTranslationCache(cachePath) {
    if (fs.existsSync(cachePath)) {
        return JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
    }
    return {};
}

// 保存 JSON 缓存
function saveTranslationCache(cachePath, cache) {
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf-8');
}

// 提取包含中文的行
function extractChineseLines(content) {
    const lines = content.split('\n');
    return lines.filter((line) => /[\u4e00-\u9fa5]/.test(line)); // 匹配包含中文的行
}

// 批量处理目录中的文件
async function processDirectory(zhDir, enDir, cachePath, batchSize = 10) {
    const translationCache = loadTranslationCache(cachePath);

    // 创建目标目录
    if (!fs.existsSync(enDir)) {
        fs.mkdirSync(enDir, { recursive: true });
    }

    // 遍历源目录，收集需要翻译的行
    const filesToProcess = [];

    function collectFilesAndLines(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                collectFilesAndLines(filePath);
            } else if (path.extname(file) === '.md') {
                const content = fs.readFileSync(filePath, 'utf-8');
                const chineseLines = extractChineseLines(content);

                const lineMap = {}; // 用于映射原始行到翻译后的行

                for (const line of chineseLines) {
                    if (translationCache[line]) {
                        lineMap[line] = translationCache[line]; // 使用缓存
                    } else {
                        lineMap[line] = null; // 标记待翻译
                    }
                }

                filesToProcess.push({
                    filePath,
                    content,
                    lineMap,
                });
            }
        }
    }

    // 收集所有文件和需要翻译的行
    collectFilesAndLines(zhDir);

    // 批量翻译
    const allLinesToTranslate = [];
    for (const fileData of filesToProcess) {
        for (const line in fileData.lineMap) {
            if (fileData.lineMap[line] === null) {
                allLinesToTranslate.push(line);
            }
        }
    }

    let translatedLines = {};
    for (let i = 0; i < allLinesToTranslate.length; i += batchSize) {
        const batch = allLinesToTranslate.slice(i, i + batchSize);
        console.log(`Translating batch of ${batch.length} lines...`);
        const translations = await translateTextBatch(batch);

        // 更新缓存和翻译结果
        batch.forEach((line, index) => {
            const translated = translations[index];
            translationCache[line] = translated;
            translatedLines[line] = translated;
        });

        // 保存缓存
        saveTranslationCache(cachePath, translationCache);
    }

    // 替换文件中的中文行为翻译后的内容，并写入文件
    for (const fileData of filesToProcess) {
        const { filePath, content, lineMap } = fileData;

        // 更新 lineMap 中的翻译结果
        for (const line in lineMap) {
            if (translatedLines[line]) {
                lineMap[line] = translatedLines[line];
            }
        }

        // 替换文件中的中文行
        const translatedContent = content
            .split('\n')
            .map((line) => (lineMap[line] ? lineMap[line] : line))
            .join('\n');

        // 写入目标文件
        const relativePath = path.relative(zhDir, filePath);
        const enFilePath = path.join(enDir, relativePath);
        fs.mkdirSync(path.dirname(enFilePath), { recursive: true });
        fs.writeFileSync(enFilePath, translatedContent, 'utf-8');
        // console.log(`Processed: ${filePath} -> ${enFilePath}`);
    }
}

// 主函数
async function main() {
    const zhDir = path.join(__dirname, 'zh/api'); // 中文目录
    const enDir = path.join(__dirname, 'en/api'); // 英文目录
    const cachePath = path.join(__dirname, 'translation_cache.json'); // 翻译缓存文件
    const batchSize = 100; // 每次批量翻译的最大行数

    // 删除旧的 en/api 目录
    if (fs.existsSync(enDir)) {
        console.log(`Deleting existing directory: ${enDir}`);
        deleteFolderRecursive(enDir);
    }

    // 检查中文目录是否存在
    if (!fs.existsSync(zhDir)) {
        console.error(`Error: The directory "${zhDir}" does not exist.`);
        return;
    }

    try {
        await processDirectory(zhDir, enDir, cachePath, batchSize);
        console.log('All files processed successfully.');
    } catch (error) {
        console.error('Error processing files:', error);
    }
}

main();