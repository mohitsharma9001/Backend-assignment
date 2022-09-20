const express = require("express")
const fs = require('fs');
const app = express();
const cors = require("cors");

app.use(express.json())
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello my name is mohit sharma")
})

app.get("/todo",(req,res)=>{
    fs.readFile("./db.json",{encoding : "utf-8"},(err,data)=>{
       res.send(data)
    })
})

app.post("/todo",(req,res)=>{
    fs.readFile("./db.json",{encoding : "utf-8"},(err,data)=>{
        const parsed = JSON.parse(data)
        parsed.todo = [...parsed.todo, req.body]
        fs.writeFile("./db.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
            res.send("New Product Added");
          }) 
    })
})

app.delete("/todo/:id",(req,res)=>{
    const {id} = req.params
    fs.readFile("./db.json",{encoding : "utf-8"},(err,data)=>{
        
        const parsed = JSON.parse(data)
        parsed.todo = parsed.todo.filter((todo)=>todo.id != id)
        fs.writeFile("./db.json", JSON.stringify(parsed),{encoding : 'utf-8'}, ()=>{
            res.send("Product deleated");
          }) 
    })
})



const port  = 3002
app.listen(port,(req,res)=>{
    console.log(`server is listining ${port}`)
})