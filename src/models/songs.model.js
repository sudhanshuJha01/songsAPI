import mongoose from "mongoose";

const songSchema =new mongoose.Schema({
    songName:{
        type:String,
        require:true,
        index:true
    },
    src:{
        type:String,
    },
    artistName:{
        type:String
    },
    avatar:{
        type:String
    }
},{timestamps:true})

export const Songs = mongoose.model("Song" , songSchema)