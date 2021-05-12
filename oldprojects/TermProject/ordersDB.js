const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
    ':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

let orderSchema = new Schema({
    customerID: 'string',
    products: [{productID: 'string', productName: 'string', quantity: 'number', price:'number', total: 'number'}],
    totalOrder: 'number'
}, {
    collection: 'termProject_Singh_Orders'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and model...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            model = connection.model("OrdersModel",
                orderSchema);
        };
        return model;
    }
};
























