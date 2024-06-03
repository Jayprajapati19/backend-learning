import { asyncHnadler } from "../utils/asyncHandler.js";


const registerUSer = asyncHnadler(async (req, res) => {

    res.status(200).json({
        message: "My name is jay prajapati"
    })
})


export { registerUSer }