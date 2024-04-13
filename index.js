const express = require('express')
const dotenv = require('dotenv')
//configuration the .env file
dotenv.config();
//create Express APP
const app = express();
const port = process.env.PORT || 8000;

//get: para obtener dtos de la base datos . Solicitud apra pedir informacion (una API)
//post: para crear
//put: para actualizar 
//delete: para borrar

//define first Route of APP
app.get('/',(req,res)=>
        //send hello world
        res.send('welcome to my API Resful : Express + TS + Swagger + Mongoose')
)

//execute APP and listen Request to PORT
app.listen(port,()=> console.log(`EXPRESS SERVER: Running at http://localhost:${port}` ))

