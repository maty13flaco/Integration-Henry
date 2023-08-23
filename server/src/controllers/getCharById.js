const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";



const getCharById = async (req, res) => {
    try {
        const response = await axios.get(URL + req.params.id);
        const {id, status, name, species, origin, image, gender} = await response.data;
        
        const data = {id, status, name, species, origin, image, gender};

        if (data) res.status(200).json(data);
        else res.status(404).json({ message : "Resource not found!" })
    } catch (error) {
        res.status(500).json({error : error.message})        
    }
}

module.exports = getCharById;