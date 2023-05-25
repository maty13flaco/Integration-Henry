import {Link} from 'react-router-dom'

import style from './style.module.css'

export default function Card(props) {
   return (
      <div className={style.cardContainer}>
         <div className={style.cardHead}>
            <div className={style.cardHeadTitle}>
               <Link to={`/detail/${props.id}`}>
                  <span>{props.name}</span>
               </Link>
               <button onClick={()=>{props.onClose(props.id)}}>X</button>
            </div>
            <img src={props.image} alt="" />
         </div>
         <div className={style.cardInfo}>
            <span className={style.infoGender}>{props.gender}</span>
            <span className={style.infoSpecies}>{props.species}</span>
         </div>
      </div>
   );
}
