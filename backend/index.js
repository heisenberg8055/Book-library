import express, { request } from "express"
import mongoose from "mongoose"
import { PORT, mongoDBCon } from "./config.js"
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json())

app.get('/', (request, response) => {
    // console.log(request)
    return response.status(200).send('<h1>Heisenberg<h1>')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBCon)
    .then(() => {
        console.log("Connected to Database");
        app.listen(PORT, () => {
            console.log(`App is running in: ${PORT}`);
        });        
    })
    .catch((error) => {
        console.log(error);
    });
