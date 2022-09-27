import mongoose from "mongoose"
import faker from "@faker-js/faker"
import crypto from "crypto"
async function connectiondata(){
const connection =  "mongodb://127.0.0.1:27017/test"
    return new Promise((resolve,reject)=>{
    mongoose.connect(connection)
    .then((resolve)=>{
        console.log('connected to database')
        resolve()
    }).catch((reject)=>{
        console.log('error')
        reject()
    })
    })
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    image : String,
    balance : Number,
    varifiedMail : Boolean
})

const userModal = mongoose.model('User',userSchema,"users")

async function test(){
    await connectiondata()


    const users = []
    for(let i = 0;i<100;i++){
        let user ={
            name : faker.name.firstName(),
            email : faker.internet.email(),
            age : crypto.randomInt(17,55),
            image : faker.image.avatar(),
            balance : crypto.randomInt(0,55000),
            varifiedMail : Boolean(crypto.randomInt(0,2))
       
           }
    }
   
}
test()