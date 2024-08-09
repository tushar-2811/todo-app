import { configDotenv } from 'dotenv';
import express from 'express';
configDotenv();


const app = express();
const port = process.env.PORT;



app.listen(port , (err) => {
    console.log(`Server is listening on port : ${port}`)
})
