var http = require('http');

const PORT = process.env.PORT || 3000

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
});
server.listen(PORT);