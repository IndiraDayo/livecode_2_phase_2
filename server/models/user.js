const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      hash = require('bycjwt')

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre('validate', function(next) {
    this.password = hash.bcencode(this.password)
    next()
});

const User = mongoose.model('User', userSchema) 
module.exports = User
