import Card from '../card/Card';
import style from './style.module.css';

export default function Cards(props) {
   const characters = props.characters;

   return (
     <div className={style.cardsContainer}>
       {props.characters?.map(
         ({ id, name, species, status, gender, origin, image }) => (
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
