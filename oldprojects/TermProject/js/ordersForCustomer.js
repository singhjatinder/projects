const ordersDB = require('../ordersDB.js');
const Order = ordersDB.getModel();

module.exports = async (req , res , next) => {

    let customerId = req.params.customerId;

    let orders = await Order.find({customerID: customerId});

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

    res.render('adminOrderView', {
        title: 'Admin - View Customer Order',
        data: results
    });
};

