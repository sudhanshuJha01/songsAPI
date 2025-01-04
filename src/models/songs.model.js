import mongoose from "mongoose";

const songSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
        index:true
    },
    src:{
        type:String,
        required:true,
    },
    artistName:{
        type:String
    },
    image:{
        type:String
    }
},{timestamps:true})

export const Song = mongoose.model("Song" , songSchema)