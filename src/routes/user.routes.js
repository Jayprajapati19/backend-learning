import { Router } from "express";
import { loginUser, logoutUser, registerUSer, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccountDetails, updateUserAvatar, upadateUserCoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js";
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
router.route("/refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyTWT, changeCurrentPassword)

router.route("/current-user").get(verifyTWT, getCurrentUser)

router.route("/update-accout").patch(verifyTWT, updateAccountDetails)

router.route("/avatar").patch(verifyTWT, upload.single("avatar"), updateUserAvatar)

router.route("/cover-image").patch(verifyTWT, upload.single("/coverImage"), upadateUserCoverImage)

router.route("/c/:username").get(verifyTWT, getUserChannelProfile)

router.route("/history").get(verifyTWT, getWatchHistory)


export default router;