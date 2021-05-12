const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let name = req.body.name;
    let desc = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;

    let newProduct = new Product({
        name: name,
        description: desc,
        price: price,
        quantity: quantity
    });

    newProduct.save();

    res.redirect('/products');
  };
