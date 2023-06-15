import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import {addFav, removeFav} from '../../../redux/actions'

import style from './style.module.css'

export default function Card(props) {
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
               <div className={style.cardHeadTitleButtons}>
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ):(
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button onClick={()=>{props.onClose(props.id)}}>X</button>
               </div>
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
