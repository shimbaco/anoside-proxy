var httpProxy = require('http-proxy');


httpProxy.createServer(3000, 'localhost').listen(80);
httpProxy.createServer(8000, 'localhost').listen(8080);