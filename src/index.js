import {app} from "./app.js"
import dbConnection from "./db/index.js"

import dotenv from 'dotenv'
dotenv.config({
    path:"./.env"
})

dbConnection()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is running on ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("error in the connection with db " , error);
    
})