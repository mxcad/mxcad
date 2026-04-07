const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3366;
const PUBLIC_DIR = path.join(__dirname, './public');

const server = http.createServer((req, res) => {
  // 跨域
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 处理请求
  const url = new URL(req.url||"/", `http://${req.headers.host}`)
 
  let filePath =  url.pathname === '/' ? path.join(__dirname, 'index.html') : path.join(PUBLIC_DIR,  url.pathname || "");
  if(url.pathname === "/es") {
    filePath = path.join(__dirname, 'es.html')
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {

      // 如果文件读取失败，则返回404状态码
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found\n');
      res.end();
    } else {
      // 设置响应头并返回文件内容
      let contentType = getContentType(path.extname(filePath));
   
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

// 根据文件扩展名返回对应的Content-Type值
function getContentType(extname) {
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    // 需要支持wasm文件
    case '.wasm':
      return 'application/wasm';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'text/plain';
  }
}