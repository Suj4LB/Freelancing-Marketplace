import bodyParser from "body-parser";
import User from "../models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try{
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User ({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("User has been created.")
    }catch(err){
        res.status(500).send("Something went wrong!")
    }
}

export const login = async (req, res) => {
    try{
        const user = await User.findOne({username:req.body.username});
        if (!user) return res.status(404).send("User not found!");
        
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Incorrect password or Username!");

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller,
        }, process.env.JWT_KEY
    );

        const {password, ...info} = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send(info)

    }catch(err){
        res.status(500).send("Something went wrong!")
    }
}

export const logout = async (req, res) => {

}