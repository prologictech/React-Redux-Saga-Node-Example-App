const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const {
  getProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/product");
const { check } = require("express-validator");

// @route    POST api/products
// @desc     Create a product
// @access   Public
router.post(
  "/",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("price").notEmpty().withMessage("Price is required"),
    check("quantity").notEmpty().withMessage("Quantity is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    addProduct(req, res);
  }
);

// @route    GET api/products
// @desc     Get all products
// @access   Public
router.get(
  "/",
  (req, res) => {
    getProducts(req, res);
  }
);

// @route    DELETE api/products/:productId
// @desc     Delete product by id
// @access   Public
router.delete(
  "/:productId",
  (req, res) => {
    deleteProduct(req, res);
  }
);

module.exports = router;
