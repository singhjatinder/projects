const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let products = await Product.find({});

    let results = products.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            description: emp.description,
            price: emp.price.toFixed(2),
            quantity: emp.quantity
        }
    });

    res.render('displayPlaceOrderView',
        {title:"Customer/Buyer - Place Order", data:results});

};
