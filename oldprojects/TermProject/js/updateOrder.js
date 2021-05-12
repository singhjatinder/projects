const orderDB = require('../ordersDB.js');
const Order = orderDB.getModel();

module.exports = async (req , res , next) => {

    let id = req.params.orderId;

    let orders = await Order.find({_id: id});

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
    res.render('updateOrderView',
        {title:"Admin - update Order", data:results});

};
