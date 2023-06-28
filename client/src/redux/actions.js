import axios from 'axios';

export const addFav = (character) => {
  const endpoint = 'https://3001-maty13flaco-integration-flh6mllpj6e.ws-us101.gitpod.io/rickandmorty/fav/';

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