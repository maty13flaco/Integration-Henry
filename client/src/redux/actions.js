import axios from 'axios';

// export const addFav = (character) => {
//   const endpoint = 'https://3001-maty13flaco-integration-flh6mllpj6e.ws-us101.gitpod.io/rickandmorty/fav/';

//   return(dispatch)=>{
//     axios.post(endpoint, character)
//     .then(({data}) =>{
//       return dispatch({
//         type: 'ADD_FAV',
//         payload: data,
//       })
//     })
//   }
// }
export const addFav = (character) => {
  return async (dispatch) => {

    const endpoint = 'http://localhost:3001/rickandmorty/fav/';
    const response = await axios.post(endpoint, character);
    const data = await response.data;
  
    return dispatch({
      type: 'ADD_FAV',
      payload: data
    })
  }
}

export const removeFav = (id) => {
  const ENDPOINT = 'http://localhost:3001/rickandmorty/fav/' + id;

  return async (dispatch) => {
    const response = await axios.delete(ENDPOINT);
    const data = await response.data;
    return dispatch({
      type: 'REMOVE_FAV',
      payload: id
    })
  }
}
// export const removeFav = (id) => {
//   return {
//     type: 'REMOVE_FAV',
//     payload: id
//   }
// }

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