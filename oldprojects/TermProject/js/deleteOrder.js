const orderDB = require('../ordersDB.js');
const Order = orderDB.getModel();

const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let id = req.params.orderId;

    let existingOrder = await Order.findById(id);
    let customerID = existingOrder.customerID;
    for (const value of existingOrder.products) {
        let product = await Product.findById(value.productID);
        product.quantity += value.quantity;
        product.save();
    }

    existingOrder.remove();
    res.redirect('/customers/orders/' + customerID);

};
