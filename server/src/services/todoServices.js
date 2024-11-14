import TodoModel from "../models/TodoModel.js"

const createTask =  async (request) => {
    const {userid,task,status, deadline} = request.body
    let newTask = new TodoModel({
        userid:userid,
        task:task,
        status:status,
        deadline:deadline,
    })
    // const result = await newTask.save() 
    // return {message:"Task Added Successfully",status:200,}
    try {
        const result = await newTask.save();
        return { message: "Task Added Successfully", status: 200, data: result };
    } catch (error) {
        console.error("Error saving task:", error.message);
        return { message: "Failed to add task", status: 500, error: error.message };
    }
}

const getTask = async (request) => {
    let query = {};
    if (request?.query?.userid) {
        query.userid = request.query.userid;
    }
    const result = await TodoModel.find(query)
    return result
}

const userUpdate = async (id,data) => {
    try {
         await TodoModel.updateOne(
            { _id: id },
            {
                username: data.username,
                email: data.email,
            }
        );
        return {message:"update Successfully",status:200,};
    } catch (error) {
        throw new Error('Failed to update user');
    } 
}
const deleteTask = async (request) => {
    const {id} = request.params
    try {
        const result = await TodoModel.deleteOne({_id:id})
        return {message:"Delete Successfully"}
    } catch (error) {
        throw new Error('Failed to Delete user');
    } 
}
export {createTask, getTask,userUpdate,deleteTask}