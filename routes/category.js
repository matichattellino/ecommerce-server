const express = require("express");
const router = express.Router();

const { createCategory, categoryById, readCategory, updateCategory, removeCategory, listCategory } = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth.js');
const { userById } = require("../controllers/user");

router.post("/category/create/:userId", requireSignin, isAdmin, isAuth, createCategory);
router.get("/category/:categoryId", readCategory);
router.put("/category/:categoryId/:userId", requireSignin, isAdmin, isAuth, updateCategory);
router.delete("/category/:categoryId/:userId", requireSignin, isAdmin, isAuth, removeCategory);
router.get("/categories", listCategory);


router.param("categoryId", categoryById)
router.param("userId", userById); 

module.exports = router;