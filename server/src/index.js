const http = require('http');
const data = require('./utils/data');
const getCharById = require('./controllers/getCharById');

const port = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes('/rickandmorty/character')){
    let id = req.url.split('/').pop();

    getCharById(res, id);
  }
})

server.listen(port, "localhost");
