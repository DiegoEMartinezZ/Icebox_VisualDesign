const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Detalle de producto
router.get("/haloInfinite", productController.haloInfinite);

module.exports = router;
