import express, { Express, Request , Response } from "express";
import dotenv from 'dotenv';

//config the .env file
dotenv.config();


//create Express APP
const app:Express = express();
const port: string | number = process.env.PORT || 8000;

//define first Route of APP
app.get('/hello',(req:Request,res:Response)=>
    //send hello world
    res.send('welcome yo GET route: !Hello!')
)

//execute APP and listen Request to PORT
app.listen(port,()=>
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}` )
)
