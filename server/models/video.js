const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      hash = require('bycjwt')

const videoSchema = new Schema({
    title: String,
    likes: Number,
    details: String
}, {
    timestamps: true
})

videoSchema.pre('validate', function(next) {
    this.password = hash.bcencode(this.password)
    next()
});

const Video = mongoose.model('Video', videoSchema) 
module.exports = Video
