import { Router } from "express"
import authRouter from "./authRouter.js"
import todoRouter from "./todoRouter.js"
import viewRouter from "./viewRouter.js"
const router = Router()

router.use("/", viewRouter)
router.use("/auth", authRouter)
router.use("/todo", todoRouter)

export default router