var httpProxy = require('http-proxy');


httpProxy.createServer({
  router: {
    'anoside.com/images': 'localhost:8000',
    'anoside.com/javascripts': 'localhost:8000',
    'anoside.com/stylesheets': 'localhost:8000',
    'anoside.com/favicon.png': 'localhost:8000',
    'anoside.com/*': 'localhost:3000'
  }
}).listen(80);