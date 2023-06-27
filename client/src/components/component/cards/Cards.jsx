import Card from '../card/Card';
import style from './style.module.css';

export default function Cards(props) {
   const characters = props.characters;
   console.log(characters)

   return (
      <div className={style.cardsContainer}>
      {/* {characters?.map((character) =>{
         return(
            <Card key={character.id} id={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender}  image={character.image} onClose={props.onClose} /> 
         )
      })} */}
    {props.characters?.map(
        ({id, name, species, status, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={props.onClose}
          />
        )
      )}

      </div>
   );
}
