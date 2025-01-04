import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.urlencoded())
app.use(express.static("public"))


export {app}
