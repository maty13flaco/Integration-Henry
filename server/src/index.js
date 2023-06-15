const http = require('http');
const data = require('./utils/data');

const port = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes('/rickandmorty/character')){
    let id = req.url.split('/').pop();

    data.filter((character) => {
      if(character.id === parseInt(id)){
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(character));
      }
    })
  }
})

server.listen(port, "localhost");
