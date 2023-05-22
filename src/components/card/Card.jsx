import style from './style.module.css'

export default function Card(props) {
   return (
      <div className={style.cardContainer}>
         <div className={style.cardHead}>
            <div className={style.cardHeadTitle}>
               <span>{props.name}</span>
               <button onClick={props.onClose}>X</button>
            </div>
            <img src={props.image} alt="" />
         </div>
         <div className={style.cardInfo}>
            <span className={style.infoGender}>{props.gender}</span>
            <span className={style.infoSpecies}>{props.species}</span>
         </div>
         {/* <h2>{props.status}</h2> */}
         {/* <h2>{props.name.origin}</h2> */}
      </div>
   );
}
