const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports = async (req , res , next) => {

    let name = req.params.name;
    let from = req.params.from;
    let to = req.params.to;
    let products = await Product.find({$and:[
                    {name: { "$regex": name, "$options": "i" }},
                    // {description:{ "$regex": name, "$options": "i" }},
            {price:{ "$gte":from,$lte:to}}
        ]});

    let results = products.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            description: emp.description,
            price: emp.price.toFixed(2),
            quantity: emp.quantity
        }
    });

    res.format({

        'application/json': function () {
            res.json(results);
        },

        'application/xml': function () {
            let returnXml = '<?xml version="1.0"?>\n';
            for(let product of results) {
                returnXml += '<product id="' + product.id + '">\n' +
                    '<name>' + product.name + '</name>\n' +
                    '<description>' + product.description + '</description>\n' +
                    '<price>' + product.price + '</price>\n' +
                    '</product>\n';
            }
            res.type('application/xml');
            res.send(returnXml);
        }});

};
