import { Router } from "express";
import { upload } from "../middleware/multer.js";
import {postSong ,getSongs} from "../controllers/songs.js"

const router = Router()

router.route('/post').post(
    upload.fields([
        {name:"src" , maxCount:1},
        { name: "avatar", maxCount: 1 }
    ]) ,
    postSong
)

router.route('/get').get(getSongs)



export default router