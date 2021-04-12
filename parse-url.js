const url = require('url');

const exampleUrl = '/about?name=Jane&city=Boston';

const parsedUrl = url.parse(exampleUrl, true);

console.log('Parsed query string:');
console.log(parsedUrl.query);

const urlNoQuery = '/about';
const parsedUrlNoQuery = url.parse(urlNoQuery, true);
console.log(parsedUrlNoQuery.query);
