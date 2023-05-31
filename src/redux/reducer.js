// Crear un initialState con una propiedad llamada "myFavorites". Esta propiedad será un arreglo vacío.
// Luego deberás crear tu reducer. Recuerda que este recibe dos parámetros y que dentro de él hay un switch.
// [NOTA]: ten en cuenta el modo en el que lo exportas, y cómo lo importas dentro de tu store.
// Crea un primer caso llamado "ADD_FAV" en el que puedas agregar a un personaje que recibes por payload a tu estado "myFavorites".
// Crea otro caso llamado "REMOVE_FAV" en el que puedas eliminar a un personaje de tu estado "myFavorites" a partir de un id que recibas por payload.
// [NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.
// No te olvides de tu caso default.
const initialState = {
    myFavorites: []
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
        return {...state, myFavorites: [...state.myFavorites, action.payload] };
    case "REMOVE_FAV":
        return {...state, myFavorites: [...state.myFavorites.filter(character => character.id != action.payload)]}
      default:
        return state;
  }
}

export default rootReducer;