const Router = require('express')
const router = new Router()
const UserRouter = require("./userRoute/userRouter");
router.use('/user',UserRouter)

module.exports = router