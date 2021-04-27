const jwt  = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const checkInUser = async (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    console.log("decoded");
    const user = await User.findOne({user_id:decoded.userId});
    req.userId = req.params.userId;
    if (user) {
        return next();
    } else {
        res.status(500).send(error);
    }
}
module.exports = {checkInUser};