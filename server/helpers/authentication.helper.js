const jwt = require("jsonwebtoken");

module.exports = function authenticate(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded
    } catch (err) {
        console.log(err)
        return null
    }
};
