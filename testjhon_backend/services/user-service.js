
const ApiError = require("../errors/ApiError");
const bcrypt = require("bcrypt");
const TokenService = require("./token-service");



class UserService {
    //REGISTRATION
    async registration(req,res,next) {
        const {email,password} = req.body
        try {
        if (!email && !password) {
             ApiError.BadRequest("Некорректный email или password");
        }

        let name = "Anonymous";
        const hashPassword = await bcrypt.hash(password, 5);
        const user = {
                email,
                password: hashPassword,
            }
         return res.send(TokenService.correctResponse(user));

        } catch (e) {
            next()
        }

    }

    //LOGIN
    async login(req, res,next) {
        try {
        const {email,password,passwordCode} = req.body
        if (!email || !password) {
            throw ApiError.BadRequest("Вы не ввели email или password");
        }
        let comparePassword = await bcrypt.compareSync(password, passwordCode)
        if (!comparePassword) {
             throw ApiError.BadRequest("Wrong password");
        }
        const user = {
            email,
            password: passwordCode,
        }

        return res.send(TokenService.correctResponse(user));
        }
        catch (e) {
            return res.status(e.status).json(e)
        }
    }
}



module.exports = new UserService();
