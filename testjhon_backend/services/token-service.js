const jwt = require("jsonwebtoken");
const ApiError = require("../errors/ApiError");
const UserDTO = require("../DTO/userDTO");

class TokenService {
    //################################
    correctResponse(candidate) {
        try {
            const userDto = new UserDTO(candidate);
            const tokens = this.generateToken({ ...userDto });
            console.log({ ...tokens, user: {...userDto} })
            return { ...tokens, user: userDto };
        } catch (e) {
            return ApiError.BadRequest("unpredictable error");
        }
    }
    //################################
    //################################
    generateToken(payload) {
        const accessToken = jwt.sign(payload, "EASY_KEY", {
            expiresIn: "30m",
        });
        const refreshToken = jwt.sign(
            payload,
            "SECRET_KEY",
            {
                expiresIn: "30d",
            }
        );
        if (!accessToken || !refreshToken) {
            return ApiError.Forbidden("Token cannot generate,unpredictable error");
        }
        return { accessToken, refreshToken };
    }
    //################################

}

module.exports = new TokenService();
