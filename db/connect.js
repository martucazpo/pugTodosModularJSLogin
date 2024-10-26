import mongoose from "mongoose"
import config from "../config.js"

const connect = (app) =>{
    mongoose
    .connect(config.MONGO_URI)
    .then(()=>{
        console.log("The goose is on the loose...")
        app.listen(8001, ()=>console.log("Tiny ears listen on port 8000"))
    })
}

export default connect