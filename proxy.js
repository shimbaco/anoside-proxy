var httpProxy = require('http-proxy');


httpProxy.createServer({
  router: {
    'localhost/images': 'localhost:8000',
    'localhost/javascripts': 'localhost:8000',
    'localhost/stylesheets': 'localhost:8000',
    'localhost/favicon.png': 'localhost:8000',
    'localhost/*': 'localhost:3000'
  }
}).listen(80);