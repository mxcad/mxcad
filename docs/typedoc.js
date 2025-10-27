const { spawn } = require('child_process');
const path = require('path');

// 获取当前脚本所在目录
const scriptDir = __dirname;

// 定义要运行的脚本
const scripts = [
  path.join(scriptDir, 'translate-type-to-md.js'),
  path.join(scriptDir, 'translate-zh-to-en-md.js')
];

// 依次运行每个脚本
function runScriptsSequentially(scripts) {
  if (scripts.length === 0) {
    console.log('所有脚本运行完成');
    return;
  }

  const script = scripts[0];
  console.log(`正在运行脚本: ${script}`);

  // 使用 spawn 运行脚本
  const child = spawn('node', [script], {
    cwd: scriptDir, // 设置工作目录
    stdio: ['pipe', 'pipe', 'pipe'] // 捕获 stdout 和 stderr
  });

  // 实时捕获并输出 stdout
  child.stdout.on('data', (data) => {
    console.log(`[stdout] ${data.toString()}`);
  });

  // 实时捕获并输出 stderr
  child.stderr.on('data', (data) => {
    console.error(`[stderr] ${data.toString()}`);
  });

  // 监听子进程退出事件
  child.on('close', (code) => {
    if (code !== 0) {
      console.error(`脚本 ${script} 退出，退出码: ${code}`);
    } else {
      console.log(`脚本 ${script} 成功完成`);
    }

    // 递归运行下一个脚本
    runScriptsSequentially(scripts.slice(1));
  });
}

// 开始运行脚本
runScriptsSequentially(scripts);