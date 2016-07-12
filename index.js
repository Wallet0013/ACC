var http = require('http');
var fs = require('fs');
 
var server = http.createServer();
server.on('request', getJs);
server.listen(8080);
console.log('Server running ...');
 
function getJs(req, res) {
    var url = req.url;
	console.log(url);
    if ('/' == url) {
        fs.readFile('./index.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/header.html' == url) {
     	fs.readFile('./header.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/footer.html' == url) {
     	fs.readFile('./footer.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/acc.html' == url) {
     	fs.readFile('./acc.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/ucsdtool.html' == url) {
     	fs.readFile('./ucsdtool.html', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if ('/css/bulma.css' == url) {
        fs.readFile('./css/bulma.css', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    } else if ('/js/module.js' == url) {
        fs.readFile('./js/module.js', 'UTF-8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });
    } 
}

