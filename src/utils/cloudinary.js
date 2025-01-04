import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

cloudinary.config({ 
    cloud_name: process.env.CLODINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret: process.env.CLODINARY_API_SECRET 
});

const uploadOnCloudnairy = async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        const response  = await cloudinary.uploader.upload(localFilePath , {resource_type:'auto'} );
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.log("error occured in the upload of file in cloudinary " , error);
        fs.unlinkSync(localFilePath);
        
        return null;
    }
}

export {uploadOnCloudnairy};