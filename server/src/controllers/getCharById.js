const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    axios.get(URL + req.params.id)
        .then((response) => {
            const {id, status,name,species,origin,image,gender} = response.data
            const data = {id, status, name, species, origin, image, gender}
            if (data) res.status(200).json(data);
            else res.status(404).json({ message: "Resource not found!" });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
}

module.exports = getCharById;