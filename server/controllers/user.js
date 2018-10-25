require('dotenv').config()

const hash = require('bycjwt'),
      User = require('../models/user')


class Controller {

    static register(req, res) {
        let objUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        let user = new User(objUser)
        user.save()
            .then(result => {
                res.status(201).json({
                    data: result
                })
            })
            .catch(err => res.status(500).json({
                err: err
                }))
    }

    static login(req, res) {
        let email = req.body.email
        let password = req.body.password

        User.findOne({
            email: email
        })
            .then(user => {
                if (hash.bcdecode(password, user.password)) {
                    process.env.TOKEN = hash.jwtencode({
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    })
                    res.status(200).json({
                        name: user.name,
                        token: process.env.TOKEN,
                        data: hash.jwtdecode(process.env.TOKEN)
                    })
                }
                else {
                    res.status(400).json({message: "Incrorrect password"})
                }
            })
            .catch(err => {
                res.status(500).json({err})
            })
    }
  
    getCredentials(req, res) {
        res.status(200).json({
            data: hash.jwtdecode(req.headers.token)
        })
    } 
}

module.exports = Controller