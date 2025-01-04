import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.urlencoded())
app.use(express.static("public"))


import songRouter from "./routes/songsRoute.js";

app.use('/api/v1' , songRouter)


export {app}
