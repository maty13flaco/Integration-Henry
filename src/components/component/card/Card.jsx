import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {addFav, removeFav} from '../../../redux/actions'

import style from './style.module.css'

export default function Card(props) {
//    Una vez hecho esto, nos tenemos que asegurar que el status de nuestro estado local se mantenga aunque nos vayamos y volvamos al componente. Para esto vamos a agregar una función mapStateToProps. Esa función debe traer nuestro estado global myFavorites. Finalmente recíbelo por props dentro de tu componente.
// Este useEffect comprobará si el personaje que contiene la Card ya está dentro de tus favoritos. En ese caso setteará el estado isFav en true. Cópialo y pégalo dentro de tu componente (no te olvides de importar este hook).
   const [isFav, setIsFav] = useState(false)
   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch();

   useEffect(() => {
     myFavorites.forEach((fav) => {
       if(props.id === fav.id){
         setIsFav(true)
       }
     })
   },[myFavorites])
   
   const handleFavorite = (e) => {
      if(isFav === true){
         setIsFav(false)
         dispatch(removeFav(props.id))
      }
      else if(!isFav){
         setIsFav(true)
         dispatch(addFav(props))
      }
   }
   return (


      <div className={style.cardContainer}>
         <div className={style.cardHead}>
            <div className={style.cardHeadTitle}>
               <Link to={`/detail/${props.id}`}>
                  <span>{props.name}</span>
               </Link>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ) : (
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
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
