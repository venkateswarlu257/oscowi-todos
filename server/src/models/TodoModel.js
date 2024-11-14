import mongoose from 'mongoose'


const TodoSchema = new mongoose.Schema({
    userid:{type: String,  required: true,},
    task: {type: String, required: true,},
    status: {type: String, required: true,},
    deadline: {type: Date, required: true,},
})

const TodoModel = mongoose.model('todos',TodoSchema)

export default TodoModel