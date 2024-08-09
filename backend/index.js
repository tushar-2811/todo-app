import { configDotenv } from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/route.index.js'
import connectDB from './db/db.js';
configDotenv();


const app = express();

app.use(cors());
app.use(cookieParser());

const port = process.env.PORT;


app.use('/' , indexRouter);

connectDB()
.then(() => {
    app.listen(port , (err) => {
        console.log(`Server is listening on port : ${port}`)
    })    
})
.catch((error) => {
   console.log("Error while connecting to db" , error);
   throw error;
})