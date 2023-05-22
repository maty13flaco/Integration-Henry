import Card from '../card/Card';
import style from './style.module.css';

export default function Cards(props) {
   const characters = props.characters;
   const alertMsg = () => {
      alert('Simulamos que se cierra la card');
   }
   return (
      <div className={style.cardsContainer}>
      {characters.map((character) =>{
         return(
            <Card key={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender} origin={character.name.origin} image={character.image} onClose={alertMsg} /> 
         )
      })}
      </div>
   );
}
