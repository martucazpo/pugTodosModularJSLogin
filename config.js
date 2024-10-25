import dotenv from "dotenv"
import session from "express-session"
import { default as connectMongoDBSession } from "connect-mongodb-session"
if(process.env.NODE_ENV !== "production"){
    dotenv.config()
} else {
    config.SESSION.cookie.secure = true
}
const MongoDBStore = connectMongoDBSession(session)
const store= new MongoDBStore({
    uri: process.env.MONGO_URI,
    collection: "sessions"
})

const config = {
    MONGO_URI: process.env.MONGO_URI,
    SESSION: {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store,
        cookie: {}
    }
}

export default config