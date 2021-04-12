const http = require('http');
const url = require('url');
const port = 8000;

const name = 'Margot';
const city = 'Nantes';
const url1 = '/?name=Margot&city=Nantes';

const requestHandler = (request, response) => {
  console.log(url1);
  response.end(`Hello ${name} from ${city}`);
};
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
