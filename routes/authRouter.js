import { Router } from "express"
import controllers from "../controllers/index.js"
const authRouter = Router()

authRouter
.route("/createuser")
.post(controllers.createUser)

authRouter
.route("/deleteuser/:_id/user")
.post(controllers.deleteUser)

authRouter
.route("/updateuser/:_id/user")
.post(controllers.updateUser)

authRouter 
.route("/login")
.post(controllers.login)

authRouter
.route("/logout/:_id/user")
.post(controllers.logout)

export default authRouter