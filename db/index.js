import connect from "./connect.js"
import User from "./models/User.js"
import Todo from "./models/Todo.js"

const db = {
    connect,
    User,
    Todo
}

export default db