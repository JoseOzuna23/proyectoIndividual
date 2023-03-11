const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports.authenticate = (req, res, next) => {
    console.log("cookies", req.cookies.userToken)
    jwt.verify(req.cookies.userToken, SECRET, (error, payload) => {
        if (error) {
            console.log('authentication error',error)
            res.status(401).json({ verified:false })
        } else {
            console.log('authenticated!')
            next();
        }
    });
}