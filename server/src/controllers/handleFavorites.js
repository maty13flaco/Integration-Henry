let favorites = []

const postFav = (req, res) => {
  favorites.push(req.body)

  return res.json({message: 'Added favorite!', favorite: req.body})
}

const deleteFav = (req, res) => {
  if(req.params.id){

    const id = parseInt(req.params.id);
    
    let myFavorites = favorites.filter((fav) => fav.id !== id);
    
    res.status(200)
    res.json({
      message: "Favorite removed succefuly!",
      favorites: myFavorites
    })
  }
  else{
    res.status(200)
    res.json({myFavorite: myFavorites})
  }
}

module.exports = {
    postFav, 
    deleteFav
}