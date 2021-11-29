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

app.use(cors());

app.use(urlencoded({
    extended: false
}))

app.use(`/api/v1`, route);


const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('server is running');
  });
}

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})

export default app