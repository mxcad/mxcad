
const TypeDoc = require('typedoc');
const path = require('path');
const fs = require('fs');
const markdownPlugin = require('typedoc-plugin-markdown')
const mdnLinksPlugin = require('typedoc-plugin-mdn-links')


// 根目录
function rootPath(...args) {
    return path.join(__dirname, '..', ...args)
}

// 递归删除目录
function deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) {
                // 递归删除子目录
                deleteFolderRecursive(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
        // 删除空目录
        fs.rmdirSync(path);
    }
}

// 主函数
async function main(entries = [
    rootPath('src/export2d.ts'),
    rootPath('src/exportTool.ts'),
    rootPath('src/exportMap.ts'),
], isDeleteFolderRecursive = false) {
    // 初始化 TypeDoc
    const app = new TypeDoc.Application();

    // 使 TypeDoc 拥有读取 tsconfig.json 的能力
    app.options.addReader(new TypeDoc.TSConfigReader());

    // 输出产物位置
    const outputDir = path.join(__dirname, 'zh/api');

    // 插件加载
    // 默认全局的TS类型 如Date File等 可以直接跳转到MDN网页
    mdnLinksPlugin.load(app)
 
    // 转换成markdown文件
    markdownPlugin.load(app)

    // 删除输出目录目录
    isDeleteFolderRecursive && deleteFolderRecursive(outputDir)

    // 指定 TypeDoc 配置项
    app.bootstrap({
        name: "mxcad_2d API 文档",
        entryPoints: entries,
        tsconfig: rootPath('tsconfig.json'),
        plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-missing-exports'],
        readme: 'none',
        theme: 'markdown',
        disableSources: true,
        cleanOutputDir: isDeleteFolderRecursive,
        excludePrivate: true,
        excludeProtected: true,
        excludeInternal: true
    });
    const project = app.convert();

    if (project) {
        // 生成文档内容
        await app.generateDocs(project, outputDir);
        fs.unlinkSync(outputDir + "/.nojekyll");
    }

}

main([], true)
    .then(() => main()).catch(console.error);

// 递归复制wasm目录
function copyDir(src, dest) {
    const exists = fs.existsSync(src);
    const isDirectory = exists && fs.lstatSync(src).isDirectory();
    if (exists && isDirectory) {
        fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(item => {
            const srcPath = path.join(src, item);
            const destPath = path.join(dest, item);
            copyDir(srcPath, destPath);
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}
copyDir(rootPath('public/wasm'), rootPath('docs/public/wasm'));