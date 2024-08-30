const http = require('http');//importing http,fs,path modules
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => 
    {
    let filePath = path.join(__dirname, req.url);
    let contentType = 'text/html';
    const extname = path.extname(filePath);
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.gif':
            contentType= 'image/gif';
            break;
    }
    fs.readFile(filePath, (err, data) => {//reading requested file data and send it to server as response 
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});
server.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
