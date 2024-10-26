import { Router } from "express"
import controllers from "../controllers/index.js"
const todoRouter = Router()

todoRouter 
.route("/addtask")
.post(controllers.createTodo)

todoRouter 
.route("/deletetask/:taskId")
.post(controllers.deleteTodo)

todoRouter 
.route("/updatetask/:taskId")
.post(controllers.updateTodo)


export default todoRouter