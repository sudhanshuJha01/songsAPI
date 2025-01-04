import { Router } from "express";
import { upload } from "../middleware/multer.js";
import {postSong ,getSongs} from "../controllers/songs.js"

const router = Router()

router.route('/post').post(
    upload.fields([
        { name: "avatar", maxCount: 1 }
    ]) ,
    postSong
)

router.route('/songs').get(getSongs)



export default router