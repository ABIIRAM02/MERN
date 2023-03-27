const express = require('express')
const app = express()
const PORT = 2001
const cors = require('cors')

//requiring mongoose
const mongoose = require('mongoose')
mongoose.set('strictQuery' , false)

//accessing middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//connecting to DataBase
let dbURI = "mongodb://localhost:27017/EmpList"
mongoose.connect(dbURI)
.then(()=>
{
    console.log("Connected to DataBase");
})

//creating and requiring schema
let admin = require('./Models/adminSchema') 

app.post('/signup' , async (req ,res)=>
{
    try {
        let person = await admin.findOne({name:req.body.name})

        if (person)
        {
            res.send({message:"admin already exists"})    
        }
        else 
        {
            let adminData = new admin({
                name:req.body.name,
                password:req.body.password
            })    
            await adminData.save()
            res.send({message:"new admin has been created"})
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/login' ,async (req,res)=>
{
try {
    let person = await admin.findOne({name:req.body.name})
    if (person) 
    {
        if (person.password == req.body.password) 
        {
            res.send({message:"login successfull" , adminData:person})    
        } else {
            res.send({message: "incorrect password"})
        }
    } 
    else 
    {
        res.send({message:"seems like you haven't signed before"})
    }
} catch (error) {
    console.log(error);
}
} )

//making app to listen to the port
app.listen( PORT ,  ()=>
{
    console.log(`Listening To Port ${PORT}`);
})