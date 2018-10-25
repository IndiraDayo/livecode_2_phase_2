require('dotenv').config()

const User = require('../models/user'),
      hash = require('bycjwt')

module.exports = {
  authenticate: function(req, res, next) {
    const validUser = hash.jwtdecode(process.env.TOKEN)
    console.log('masuk auth');
    
    if (process.env.TOKEN === undefined || validUser === undefined) {
      console.log('auth nya error');
      
      res.status(404).json({message: 'Token not valid'})
    }
    else {
      console.log('Masuk auth yg sukses');
      
      req.data = validUser
      next()
    }
  },

  authorize: function(req, res, next) {
    User.findOne({
      _id: req.data._id
    })
      .then(() => next())
      .catch(err => res.status(403).json({message: 'Permission to access site is denied' + err}))
  }
}
