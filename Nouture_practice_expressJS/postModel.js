const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: [true, 'Must have a unique name']
    },
    status: {
        type: String,
        require: true
    }
})

const Post = mongoose.model('Post', schema)
module.exports = Post;