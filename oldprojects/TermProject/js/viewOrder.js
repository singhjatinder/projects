const orderDB = require('../ordersDB.js');
const Order = orderDB.getModel();

const customerDB = require('../customerDB.js');
const Customer = customerDB.getModel();

module.exports = async (req , res , next) => {
    let customer = await Customer.find({name: "Jatinder"});

    let orders = await Order.find({customerID: customer[0]._id});

    let name = customer[0].name;

    let results = orders.map( emp => {
        return {
            id: emp._id,
            customerID: emp.customerID,
            products: emp.products.map(emp => {
                return{
                    id: emp._id,
                    productName: emp.productName,
                    quantity: emp.quantity,
                    price: emp.price.toFixed(2),
                    total: emp.total.toFixed(2)
                }
            }),
            totalOrder: emp.totalOrder.toFixed(2),
        }
    });

    res.render('orderView',
        {title:"Customer/Buyer - View All Order", data:results, name: name});

};
