const http = require('http');
const url = require('url');
const port = 8000; 

const requestHandler = (request, response) => {
const name = 'Margot';
const city = 'Nantes';
const url1 = '/?name=Margot&city=Nantes';

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl.query);
};
    response.end('Hello Node.js Server!');
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
