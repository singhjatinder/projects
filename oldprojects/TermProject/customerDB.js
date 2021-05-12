const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = 'mongodb://' + credentials.username +
    ':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: 'string',
    email: 'string'
}, {
    collection: 'termProject_Singh_Customers'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and model...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            model = connection.model("productModel",
                customerSchema);
        };
        return model;
    }
};
























