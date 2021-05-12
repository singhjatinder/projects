const customerDB = require('../customerDB.js');
const Customer = customerDB.getModel();

module.exports = async (req , res , next) => {

    let search = req.body.search;
    let products = await Customer.find({$or:[{name: { "$regex": search, "$options": "i" }},
            {email:{ "$regex": search, "$options": "i" }}]});

    let results = products.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            email: emp.email
        }
    });

    res.render('displayAllCustomersView',
        {title:"Admin - Search Results", data: results});

};
