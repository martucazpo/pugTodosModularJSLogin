import express from "express"
import path from "path"
import db from "./db/index.js"
import auth from "./auth/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(process.cwd(), "public")))
app.set("views", "./views")
app.set("view engine", "pug")
app.set("json spaces", 2)

auth(app)
db.connect(app)

export default app