import mongoose from 'mongoose'

const RegisterSchema = new mongoose.Schema({
    id: {type: String, required: true,unique: true},
    username: {type: String, required: true,},
    email: {type: String, required: true, unique: true,},
    password: {type: String, required: true,},
},{ timestamps: true})

const UserRegisterModel = mongoose.model('User',RegisterSchema)

export default UserRegisterModel