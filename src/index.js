import {app} from "./app.js"
import dbConnection from "./db/index.js"

import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

dbConnection()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on 3000");
        
    })
})
.catch((error)=>{
    console.log("error in the connection with db " , error);
    
})