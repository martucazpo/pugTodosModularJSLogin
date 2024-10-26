import { Router } from "express"
import controllers from "../controllers/index.js"
const viewRouter = Router()

viewRouter 
.route("/")
.get(controllers.showLanding)

viewRouter 
.route("/login")
.get(controllers.showLogin)

viewRouter
.route("/register")
.get(controllers.showRegistration)

viewRouter 
.route("/app")
.get(controllers.showAppLanding)

export default viewRouter