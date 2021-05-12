const customerDB = require('../customerDB.js');
const Customer = customerDB.getModel();

module.exports = async (req , res , next) => {

    let customers = await Customer.find({});

    let results = customers.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            email: emp.email,
        }
    });

    res.render('displayAlLCustomersVIew',
        {title:"Admin - List of Customers", data:results});

};
