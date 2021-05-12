const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let search = req.body.search;
    let products = await Product.find({$or:[{name: { "$regex": search, "$options": "i" }},
            {description:{ "$regex": search, "$options": "i" }}]});

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
        {title:"Customer/Buyer - Search Results", data: results});

};
