const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    res.end('hello http server');
});

server.listen(port, () => {
    console.log(`server listening on: http://127.0.0.1:%s`, port);
});
