import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'


cloudinary.config({ 
    cloud_name: "dbgxpgc8i" , 
    api_key: 224856225668228  , 
    api_secret: "nkiCT7IvselJ_p5AuufHSEISQRI"
});

const uploadOnCloudnairy = async (localFilePath)=>{
    try {
        if(!localFilePath) return null;
        const response  = await cloudinary.uploader.upload(localFilePath , {resource_type:'auto'} );
        // fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        console.log("error occured in the upload of file in cloudinary " , error);
        fs.unlinkSync(localFilePath);
        
        return null;
    }
}

export {uploadOnCloudnairy};