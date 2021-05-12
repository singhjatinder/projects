const mongoose = require('mongoose');

const credentials = require("./credentials.js");

const dbUrl = "mongodb+srv://"+ credentials.username + ':' + credentials.password + '@' + credentials.host + '/' + credentials.database +"?authSource=admin&replicaSet=atlas-486qjx-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true";

let connection = null;
let model = null;

let Schema = mongoose.Schema;

let recipeSchema = new Schema({
    userID: 'string',
    picture: 'string',
    name: 'string',
    prepTime: 'number',
    totalTime: 'number',
    utensils: [{utensilName: '',utensilQuantity:''}],
    ingredients: [{ingredientsName:'',ingredientsQuantity:''}],
    steps: [{step: '',picture:''}]
}, {
    collection: 'recipeData'
});

module.exports = {
    getModel: () => {
        if (connection == null) {
            console.log("Creating connection and recipeModel...");
            connection = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
            model = connection.model("recipeSchema",
                recipeSchema);
        };
        return model;
    }
};
























