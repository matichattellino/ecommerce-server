const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth.js');

const { userById, readUserInformation, updateUserInformation } = require('../controllers/user');

router.get("/secret/:userId", requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    })
})

router.get("/user/:userId", requireSignin, isAuth, readUserInformation);
router.put("/user/:userId", requireSignin, isAuth, updateUserInformation) 

router.param("userId", userById)

module.exports = router;