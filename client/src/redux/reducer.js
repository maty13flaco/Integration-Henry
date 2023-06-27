const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    case "REMOVE_FAV":
        return {...state, myFavorites: [...state.myFavorites.filter(character => character.id != action.payload)]}
    case "FILTER":
      let copy2 = state.allCharacters;
      return {...state, myFavorites: [copy2.filter(character=> character.gender === action.payload)]}
    case "ORDER":
      let copy3 = state.allCharacters.sort((a, b) => {
        return action.payload === 'A' ? a.id - b.id : b.id - a.id
      });
      return {...state, myFavorites: copy3}
    default:
        return state;
  }
}

export default rootReducer;