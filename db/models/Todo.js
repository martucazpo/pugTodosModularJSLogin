import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        task: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Todo = mongoose.model("Todo", todoSchema)

export default Todo