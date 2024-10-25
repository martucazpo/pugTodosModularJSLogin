import session from "express-session"
import passport from "passport"
import config from "../config.js"
import validate from "./validate.js"


const auth = (app) =>{
    if(app.get('env') === "production"){
        app.set("trust proxy", 1)
    }
    validate(passport)
    app.use(session(config.SESSION))
    app.use(passport.session())
}

export default auth