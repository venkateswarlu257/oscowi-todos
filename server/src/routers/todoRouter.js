import express from "express"
import { addTodo, getTodo,deleteTodo } from "../controllers/todocontroller.js"
import authMiddleware from "../middleware/auth.js"

const todoRouter = express.Router()

todoRouter.post("/adds",addTodo)
todoRouter.get("/get",authMiddleware,getTodo)
todoRouter.delete('/delete/:id',authMiddleware,deleteTodo)

export default todoRouter; 