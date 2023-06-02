import { useSelector, useDispatch } from "react-redux";
import Cards from "../component/cards/Cards";

import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

// Importa las actions que creaste en esta homework y el hook useDispatch.
// Crea una función llamada handleOrder. En su interior solo debe despachar la action orderCards pasándole como argumento e.target.value.
// Crea una función llamada handleFilter. En su interior solo debe despachar la action filterCards pasándole como argumento e.target.value.
// Agrega el atributo onChange a las etiquetas select pasándoles las funciones correspondientes a cada una.


const Favorites = () => {
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
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Sin genero</option>
          <option value="unknown">Desconocido</option>
        </select>
        <Cards characters={myFavorites} />
      </div>
    );
}
 
export default Favorites;