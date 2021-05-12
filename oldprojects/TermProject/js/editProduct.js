const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let id = req.params.id;

    Product.findById(id, (err, product) => {
        if (err) {
            console.log("Error selecting: %s", err);
        }
        if (!product) {
            return res.render('404');
        }

        result = { id: '', name: '', description: '', price: '', quantity: '' };
        result.name = product.name;
        result.description = product.description;
        result.price = product.price;
        result.quantity = product.quantity;
        result.id = product.id;

        res.render('editProductView', {
            title: 'Admin - Edit Product',
            data: result
        });

    });
};

