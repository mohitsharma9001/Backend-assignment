const postModal = require('../Database/post');
const jwt = require('jsonwebtoken');

const getallpost = async (req,res)=>{
try {
    const {token} = req.headers;
    let user = jwt.decode(token)
    const post = await postModal.findOne({user : user.id})
    return res.status(200).send(post);
} catch (error) {
    return res.status(500).send({message: error.message});
}
}

const createPost = async (req,res)=>{
    try {
        const {token} = req.headers;
        let user = jwt.decode(token);
        let note = req.body;
        console.log(note)
        note.user = user.id;
        note = new postModal(note);
        await note.save();
        return res.status(200).send(note);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}


module.exports = {
    getallpost,
    createPost
}