const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
    .then((data) => { 
        res.statusCode = 200;
        res.end(JSON.stringify({id, name, gender, species, origin, image, status} = data));
    } )
}

module.exports = getCharById;