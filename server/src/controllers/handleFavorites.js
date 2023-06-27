let favorites = []

const postFav = (req, res) => {
  favorites.push(req.body)

  return res.json(favorites)
}

const deleteFav = (req, res) => {
  const id = parseInt(req.params.id);

  myFavorites = myFavorites.filter((fav) => fav.id !== id);
    
  res.status(200)
  res.json({
    message: "Favorite removed succefuly!",
    favorites: myFavorites
  })
}

module.exports = {
    postFav, 
    deleteFav
}