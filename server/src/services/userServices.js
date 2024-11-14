import UserRegisterModel from "../models/UserRegisterModel.js";
import jwt from "jsonwebtoken"
import argon2 from "argon2";


const createUser =  async (userData) => {
        let exist = await UserRegisterModel.findOne({email:userData.email})
        if(exist){
            return {message:"User Already Exist",status:200}
        }
        const hashedPassword = await argon2.hash(userData.password);
        let newUser = new UserRegisterModel({
            id:userData.id,
            username:userData.username,
            email:userData.email,
            password:hashedPassword,
            
        })
        const result = await newUser.save() 
        return {message:"Registered Successfully",status:200,}
}

const validateUser = async (email,password) => {
    let exist = await UserRegisterModel.findOne({email:email});
    if(!exist){
        return {message:'User Not Found',status:401}
    }
    const isPasswordCorrect = await argon2.verify(exist.password, password);
    if(!isPasswordCorrect){
        return {message:"Password Not Match",status:401}
    }
    let payload = {
        id : exist?.id,
        username:exist?.username,
        email:exist?.email,
    }
    const jwtToken =  jwt.sign(payload,"MY_SECRET_TOKEN")
    return{jwtToken,status: 200}
}


export {createUser, validateUser}

