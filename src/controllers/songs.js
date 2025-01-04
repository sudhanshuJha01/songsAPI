import {Songs} from "../models/songs.model.js"
import { uploadOnCloudnairy } from "../utils/cloudinary.js"

const postSong = async (req , res)=>{
     try {
        const {songName , artistName} = req.body;
        console.log({songName , artistName});
        
    
        const songExist = await Songs.findOne({songName})

         if(songExist){
            return res.status(500).json({
                msg:"song exist already"
            })
         }

         const srcLocalPath = req.files?.src[0]?.path;
         const avatarLocalPath = req.files?.avatar[0]?.path;

         if(!srcLocalPath && !avatarLocalPath){
            return res.status(400).json({
                msg:"avatar and src path problem"
            })
         }

        const src = await uploadOnCloudnairy(srcLocalPath)
        const avatar  = await uploadOnCloudnairy(avatarLocalPath)

        console.log(src?.url);
        console.log(avatar?.url);

        if(!avatar && !src){
            return res.status(400).json({
                msg:"src and avatr problem after cludinary uplaod"
            })
        }

        const song =await Songs.create({
            songName,
            src:src.url,
            artistName,
            avatar:avatar.url
        })

        console.log(song);

        if(!song){
            return res.status(400).json({
                msg:"song did not created in db"
            })
        }

        return res.status(200).json(song)
        
        

     } catch (error) {
        console.log("error in controller post " , error);
        
     }
        
    }


const getSongs = (req , res)=>{
    res.status(200).json({
        msg:"ok"
    })
}

export {postSong , getSongs}