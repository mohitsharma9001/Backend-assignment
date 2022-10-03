const express = require('express');
const { getallpost, createPost } = require('../handlar/post');

const postRoutes = express.Router()

postRoutes.get('/getallpost',getallpost);
postRoutes.post('/createpost',createPost);

module.exports = postRoutes;