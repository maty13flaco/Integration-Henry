import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import style from './style.module.css'

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
    <div className={style.viewContainer}>
      <div className={style.infoContainer}>
        <h1>{character.name}</h1>
        <div className={style.infoContainerContent}>
          <span>Status: {character.status}</span>
          <hr></hr>
          <span>Specie: {character.species}</span>
          <hr></hr>
          <span>Gender: {character.gender}</span>
          <hr></hr>
          <span>Origin: {character.origin?.name}</span>
          <hr></hr>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img alt={character.name} src={character.image} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Detail;
