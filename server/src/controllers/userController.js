
import { createUser,validateUser} from "../services/userServices.js";

const registerUser = async (request,response) => {
    try{
        const result = await createUser(request.body)
        return response.send(result)
    }catch(err){
        response.send(err)
    }
}

const loginUser = async (request,response) => {
    try{
        const {email,password} = request.body;
        const result = await validateUser(email,password)
        if (result.status !== 200) {
            return response.status(result.status).send({ message: result.message });
        }
        return response.send(result)
    }
    catch(message){
        response.send(message);
    }
}

 
export {registerUser,loginUser}