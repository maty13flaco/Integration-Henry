import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const Detail = () => {
  const id = useParams().id;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return character ? (
    <div>
      <h1>{character.name}</h1>
      <span>Status: {character.status}</span>
      <span>Specie: {character.species}</span>
      <span>Gender: {character.gender}</span>
      <span>Origin: {character.origin?.name}</span>
      <img src={character.image} />
    </div>
  ) : (
    ""
  );
};

export default Detail;
