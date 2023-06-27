import axios from 'axios';

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/';

  return(dispatch)=>{
    axios.post(endpoint, character)
    .then(({data}) =>{
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      })
    })
  }
}

export const removeFav = (id) => {
  return {
    type: 'REMOVE_FAV',
    payload: id
  }
}

export const filterCards = (gender) => {
  return {
    type: 'FILTER', 
    payload: gender
  }
}

export const orderCards = (order) => {
  return{
    type: 'ORDER',
    payload: order
  }
}