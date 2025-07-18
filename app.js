const express= require('express')
require('dotenv').config()
const app= express()
const port= 3000;
const mongoose= require('mongoose')
app.get('/',(req,res)=>{
    res.send("Welcome")
})

const DbConnect=()=>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        app.listen(port,()=>{
    console.log(`server runnin on port ${port}`)
})
    } catch (error) {
      console.log(error)  
    }
}

DbConnect()

