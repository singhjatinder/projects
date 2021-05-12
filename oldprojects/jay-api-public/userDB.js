const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = "mongodb+srv://"+ credentials.username + ':' + credentials.password + '@' + credentials.host + '/' + credentials.database +"?authSource=admin&replicaSet=atlas-486qjx-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true";

    //'mongodb://' + credentials.username + ':' + credentials.password + '@' + credentials.host + ':' + credentials.port + '/' + credentials.database;

let connection = null;
let model = null;

let Schema = mongoose.Schema;

let userSchema = new Schema({
    fName: 'string',
    lName: 'string',
    pwd: 'string',
    email: 'string'
}, {
    collection: 'userData'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and model...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            model = connection.model("userModel",
                userSchema);
        };
        return model;
    }
};
























