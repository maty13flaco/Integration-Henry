// Crea una ruta en el archivo App.js para mostrar este componente. El path de la ruta debe ser /favorites.
// Crea un botón en tu Nav con el texto "Favorites" que te redirija a esta ruta.
// Dentro de tu componente Favorites crea una función mapStateToProps. Esta función debe traer el estado global myFavorites. Conecta el componente con la función, y recibe el estado global por props.
// Una vez que tengas la lista de tus personajes favoritos dentro de tu componente, deberás mapearlo y renderizar una Card con información del personaje (no te olvides de pasarle las propiedades del personaje).
import { useSelector } from "react-redux";
import Cards from "../component/cards/Cards";

const Favorites = () => {
    const myFavorites = useSelector(state => state.myFavorites);

    return (
      <div>
        <Cards characters={myFavorites} />
      </div>
    );
}
 
export default Favorites;