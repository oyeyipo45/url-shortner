import express from 'express'
import dotenv from 'dotenv';


dotenv.config()

const app = express()


app.get('/', (req, res) => {
    res.json({
        message: "success"
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})