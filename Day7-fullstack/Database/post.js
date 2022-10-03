const mongoose = require('mongoose')

const post = mongoose.Schema({
    author : String,
    title :{
        type : string
    },
    content : String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

},{
    timestamps: true
})

const postModal =new mongoose.model("Posts",postModal);

module.exports = {postModal}