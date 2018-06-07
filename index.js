var http = require('http');

const PORT = process.env.PORT || 3000

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Xin chao cac ban.');
});
server.listen(PORT);