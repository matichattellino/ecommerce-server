const user = require("../models/user");
const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found"
            })
        }
        req.profile = user
        next();
    })
}

exports.readUserInformation = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile)
}
 
exports.updateUserInformation = (req, res) => {
    User.findOneAndUpdate(
        {_id: req.profile._id},
        {$set: req.body}, 
        {new: true},
        (err, data) => {
            if(err){
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                })
            }
            data.hashed_password = undefined;
            data.salt = undefined;
            res.json(data)
        }
    )
}