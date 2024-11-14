import { createTask, getTask, deleteTask } from "../services/todoServices.js"

const addTodo = async (request,response) => {
    try{
        const result = await createTask(request)
        return response.send(result)
    }catch(err){
        response.send(err)
    }
}

const getTodo = async (request,response) => {
    try{
        const result = await getTask(request)
        return response.send(result)
    }catch(err){
        response.send(err)
    }
}
const deleteTodo = async (request,response) => {
    try{
        const result = await deleteTask(request)
        return response.send(result)
    }catch(err){
        response.send(err)
    }
}
export {addTodo,getTodo,deleteTodo}