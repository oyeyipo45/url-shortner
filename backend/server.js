import express, { urlencoded } from 'express'
import dotenv from 'dotenv';
import cors from "cors"
import route from "./route/route.js"
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config()

connectDB();

const app = express()

app.use(express.json());

app.use(urlencoded({
    extended: false
}))

app.use(cors());

app.use(`/api/v1`, route);

// app.get('/', (req, res) => {
//     res.json({
//         message: "success"
//     })
// })

// app.post('/shortenUrl', (req, res) => {
//   res.json({
//     message: 'success',
//   });
// });

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})