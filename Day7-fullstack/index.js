const express = require('express');
const connectDatabase = require('./Database/index');
const { userRoutes } = require('./Routes/user');
const {postRoutes} = require('./Routes/post')
const app = express()
app.use(express.json())



function logger (req,res,next) {
    console.log(req.path, new Date());
    next()
}

function setRequest(req, res, next) {
    req.context = {} 
    next();
}
app.use(logger)
app.use(setRequest)
app.use(userRoutes)
app.use(postRoutes)

let PORT = 3002; 
connectDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listien ${PORT}`)
    })
})

