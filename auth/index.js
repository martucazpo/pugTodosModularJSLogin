import session from "express-session"
import config from "../config.js"


const auth = (app) =>{
    if(app.get('env') === "production"){
        app.set("trust proxy", 1)
    }
    app.use(session(config.SESSION))
}

export default auth