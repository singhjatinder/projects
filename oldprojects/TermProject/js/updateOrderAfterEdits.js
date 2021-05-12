const ordersDB = require('../ordersDB.js');
const Order = ordersDB.getModel();

const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let orderID = req.body.id;
    let quantities = req.body.quantity;

    //convert it to a array if search results only had 1 output
    if(typeof quantities === "string"){
        quantitie = [quantities, -1];
        quantities = quantitie;
    }

    let existingOrder = await Order.findById(orderID);

    for (const value of existingOrder.products) {
        let i = existingOrder.products.indexOf(value);
        if(value.quantity != quantities[i]){
            let difference = value.quantity - quantities[i];
            let product = await Product.findById(value.productID);
            product.quantity += difference;
            product.save();
            value.total -= difference * value.price;
            value.quantity = quantities[i];
        }
    }
    //re-calculate the total
    let total = 0;
    for (const value of existingOrder.products) {
        total += value.total;
    }
    existingOrder.totalOrder = total;

    existingOrder.save();

    res.redirect('/customers/orders/'+existingOrder.customerID);

};
