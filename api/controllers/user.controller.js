import User from "../models/user.model.js";
import jwt from "jsonwebtoken";


export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if(req.userId !== user._id.toString()){
        return next(403, "You are not authorized to delete!");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User has been deleted.")

};