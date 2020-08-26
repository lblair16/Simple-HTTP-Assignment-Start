// imports
const http = require('http');
const htmlHandler = require('./htmlResponses');
const textHandler = require('./textResponses');
const jsonHandler = require('./jsonResponses');
const imageHandler = require('./imageResponses');

// running on port 3000, unless configured
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// start server and listen for HTTP traffic
const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`listening on 127.0.0.1: ${port}`);
