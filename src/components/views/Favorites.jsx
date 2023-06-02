import { useSelector, useDispatch } from "react-redux";
import Cards from "../component/cards/Cards";

import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = (props) => {
    const [aux, setAux] = useState(false)

    const myFavorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));  
      setAux(!aux)
    }

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    }

    return (
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>
        <Cards characters={myFavorites} onClose={props.onClose}/>
      </div>
    );
}
 
export default Favorites;