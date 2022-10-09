const express=require ("express")
const morgan =require("morgan")
const app=express()
const port=3000;

app.use(morgan("Method-:method URL-:url HTTP_Version-:http-version Status-:status Content_Length-:res[content-length] User_Agent-:user-agent Date-:date  response_time-:response-time"))


app.get("/",(req,res)=>{
    res.end("Morgan logger app")
})


app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})



app.get("/",(req,res)=>{
    res.end("Morgan logger app")
})


app.listen(port,()=>{
    console.log(`server is running http://localhost:${port}`)
})