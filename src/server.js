const http = require('http');
const fs = require('fs');

const indexHTML = fs.readFileSync(`${__dirname}/../client/client.html`);

console.log(http);

http.createServer((request, response) => {
  console.log('request happened');
  console.log(request.url);

  console.log(indexHTML);
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(indexHTML);
  response.end();
}).listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});


