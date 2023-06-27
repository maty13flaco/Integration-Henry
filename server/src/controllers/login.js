const users = require('../utils/users');

const login = (req, res) => {
  const email = req.query.email
  const password = req.query.password
  
  const user = users.find(user => user.email === email && user.password === password)

  if(user){
    res.status(200).json({access : true})
  }
  else {
    res.status(200).json({access : false})
  }
}

module.exports = login