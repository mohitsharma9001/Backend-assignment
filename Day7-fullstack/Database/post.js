const mongoose = require('mongoose')

const post =new mongoose.Schema({
    author : String,
    title :{
        type : String
    },
    content : String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{
    
    timestamps: true
})

const postModal = mongoose.model("posts",post);

module.exports = postModal