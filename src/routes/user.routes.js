import { Router } from "express";
import { loginUser, logoutUser, registerUSer } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyTWT } from "../middlewares/auth.middleware.js";



const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUSer
)

router.route("/login").post(loginUser)



// secured routes 
router.route("/logout").post(verifyTWT, logoutUser)

export default router;