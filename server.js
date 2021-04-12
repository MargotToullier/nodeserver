const http = require('http');
const url = require('url');

const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  const nameUrl = '/?name=Ringo&city=Liverpool';
  const parsedUrl = url.parse(nameUrl, true);
  const data = parsedUrl.query;
  if (data.name && data.city) {
    response.end(`hello, ${data.name} from ${data.city}`);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});
