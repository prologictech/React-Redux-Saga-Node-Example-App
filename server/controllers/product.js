const Product = require("../models/Product");

// To add new product
exports.addProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    let product = await (new Product({ name, quantity, price })).save();

    res.json(product)
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};

// to get all the products stored
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: 'Something went wrong' });
  }
};

// to find the product using name
exports.findProduct = async (req, res) => {
  try {
    const product = await Product.find({
      name: new RegExp(`.*${req.params.name}.*`),
    });
    res.json(product);
  } catch (err) {
    res.status(400).json(err.msg());
  }
};


// To delete product by _id
exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    await Product.deleteOne({ productId });

    res.status(200).json({ success: true, message: 'Product has been deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }
};
