export const addFav = (card) => {
  return {
    type: 'ADD_FAV',
    payload: card
  }
}

export const removeFav = (id) => {
  return {
    type: 'REMOVE_FAV',
    payload: id
  }
}