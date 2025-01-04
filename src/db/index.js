import mongoose from "mongoose";



const dbConnection =async ()=>{
    try {
            const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/letsong`) 
            console.log(`db connected on the host ${connectionInstance.connection.host}`);
            
    } catch (error) {
        console.log("error in db connect" , error);
        
    }
}

export default dbConnection