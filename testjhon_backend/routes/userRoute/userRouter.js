const Router = require("express");
const router = new Router();
const UserService = require('../../services/user-service')
const {registration,login} = UserService

router.post('/registration',registration)
router.post('/login',login)

module.exports = router
