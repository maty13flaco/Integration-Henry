import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {connect, useDispatch, useSelector} from 'react-redux'

import {addFav, removeFav} from '../../../redux/actions'

import style from './style.module.css'

const Card = (props) => {
   const [isFav, setIsFav] = useState(false)
   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch();

   useEffect(() => {
     myFavorites.forEach((fav) => {
       if(props.id === fav.id){
         setIsFav(true)
       }
     })
   },[myFavorites, props.id])
   
   const handleFavorite = (e) => {
      console.log(myFavorites)
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
     <div className={style.card}>
       <div className={style.cardHead}>
         <img src={props.image} alt="card image" />
       </div>
       <div className={style.cardBody}>
         <div className={style.bodyTitle}>
           <span>{props.name}</span>
         </div>
         <div className={style.bodyInfo}>
           <span>{props.origin}</span>
           <span>{props.species}</span>
           <span>{props.gender}</span>
         </div>
       </div>
     </div>
   );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
}

export default connect(mapStateToProps)(Card)
