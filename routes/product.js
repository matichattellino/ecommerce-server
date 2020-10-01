const express = require("express");
const router = express.Router();
const { 
        createProduct, 
        createProductById, 
        read, 
        removeProducts, 
        updateProduct,
        listProducts,
        listRelatedProducts,
        listCategories,
        listBySearch,
        productPhoto
} = require("../controllers/product");


const { requireSignin, isAuth, isAdmin } = require('../controllers/auth.js');
const { userById } = require("../controllers/user");

//read product except image files
router.get("/product/:productId", read)
//route to full product include image file
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, createProduct);
router.delete("/product/:productId/:userId",  requireSignin, isAuth, isAdmin, removeProducts);
router.put("/product/:productId/:userId", requireSignin, isAuth, isAdmin, updateProduct);

router.get("/products", listProducts);
router.get("/products/related/:productId", listRelatedProducts);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", productPhoto)

router.param("userId", userById);
router.param("productId", createProductById)


module.exports = router;