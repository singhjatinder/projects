if(process.env.NODE_ENV !== "production"){
    require('dotenv/config');
}

const recipeDB = require('../database/recipeDB.js');
const Recipe = recipeDB.getModel();

const credentials = require("../database/credentials.js");
const dbUrl = "mongodb+srv://"+ credentials.username + ':' + credentials.password + '@' + credentials.host + '/' + 'photos';

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

//Create Mongo Connection
const conn  = mongoose.createConnection(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});


let gfs = null;

conn.once('open', () =>{
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});


module.exports.recipePage = async (req, res, next) => {

    let recipes = await Recipe.find({userID: req.user.id}).lean();
    res.render('recipes', {recipes: recipes});
}

module.exports.createRecipePage = (req, res, next) => {
    res.render('createRecipes');
}

module.exports.saveRecipe =  async (req, res, next) => {

    // res.json({file: req.file});
    // res.render('files', {filename: req.file.filename});

    if (req.user.id !== undefined) {
        let picture = req.file.filename;
        let recipeName = req.body.recipeName;
        let recipePrepTime = req.body.recipePrepTime;
        let recipeTotalTime = req.body.recipeTotalTime;

        let utensilName = req.body.utensilName;
        let utensilQuantity = req.body.utensilQuantity;


        let ingredientsName = req.body.ingredientsName;
        let ingredientsQuantity = req.body.ingredientsQuantity;

        let step = req.body.step;

        let utensils = [{utensilName: '', utensilQuantity: ''}],
            ingredients = [{ingredientsName: '', ingredientsQuantity: ''}],
            steps = [{step: '', picture: ''}];

        if (typeof utensilName === 'string') {
            utensils[0] = {utensilName: utensilName, utensilQuantity: utensilQuantity};
        } else {
            for (let i = 0; i < utensilName.length; i++) {
                if(utensilName[i] !== ''){
                    utensils[i] = {utensilName: utensilName[i], utensilQuantity: utensilQuantity[i]};
                }
            }
        }
        if (typeof ingredientsName === 'string') {
            ingredients[0] = {ingredientsName: ingredientsName, ingredientsQuantity: ingredientsQuantity};
        } else {
            for (let i = 0; i < ingredientsName.length; i++) {
                if(ingredientsName[i] !== ''){
                    ingredients[i] = {ingredientsName: ingredientsName[i], ingredientsQuantity: ingredientsQuantity[i]};
                }
            }
        }
        if (typeof step === 'string') {
            steps[0] = {step: step, picture: ''};
        } else {
            for (let i = 0; i < step.length; i++) {
                if( step[i] !== ''){
                    steps[i] = {step: step[i], picture: ''}
                }
            }
        }

        try {
            let recipe = new Recipe({
                userID: req.user.id,
                picture: picture,
                name: recipeName,
                prepTime: parseInt(recipePrepTime),
                totalTime: parseInt(recipeTotalTime),
                utensils: utensils,
                ingredients: ingredients,
                steps: steps
            });

            await Promise.all([
                recipe.save()
            ]).catch(err => console.log('${err}}'));
            res.redirect('/recipes');
        } catch (e) {
            res.render('register', {msg: "An error has occurred. Please try again later."});
            console.log(e);
        }
    } else {
        res.redirect('/login');
    }
}
module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let recipe = await Recipe.findById(id);

    if (!recipe) {
        res.render('404');
    } else {
        await gfs.files.remove({filename: recipe.picture});
        await recipe.remove();
        res.render('recipes', {msg: "Recipe has been removed!"});
    }

}

module.exports.edit =  async (req, res, next) => {

    let id = req.params.id;
    let recipe = await Recipe.findById(id).lean();
    if ( recipe &&  req.user.id === recipe.userID) {
        res.render('editRecipe', {recipe: recipe});
    }
    else {
        res.sendStatus(404).json({err: "Unable to find the recipe or you arent authorized to edit this recipe."});
    }
}

module.exports.saveAfterEdit = async (req, res, next) => {
    if (req.user.id !== undefined) {
        let id = req.body.id;
        let recipe = await Recipe.findById(id);

        let recipeName = req.body.recipeName;
        let recipePrepTime = req.body.recipePrepTime;
        let recipeTotalTime = req.body.recipeTotalTime;

        let utensilName = req.body.utensilName;
        let utensilQuantity = req.body.utensilQuantity;

        let ingredientsName = req.body.ingredientsName;
        let ingredientsQuantity = req.body.ingredientsQuantity;

        let step = req.body.step;

        let utensils = [{utensilName: '', utensilQuantity: ''}],
            ingredients = [{ingredientsName: '', ingredientsQuantity: ''}],
            steps = [{step: '', picture: ''}];

        if (typeof utensilName === 'string') {
            utensils[0] = {utensilName: utensilName, utensilQuantity: utensilQuantity};
        } else {
            for (let i = 0; i < utensilName.length; i++) {
                if(utensilName[i] !== ''){
                    utensils[i] = {utensilName: utensilName[i], utensilQuantity: utensilQuantity[i]};
                }
            }
        }
        if (typeof ingredientsName === 'string') {
            ingredients[0] = {ingredientsName: ingredientsName, ingredientsQuantity: ingredientsQuantity};
        } else {
            for (let i = 0; i < ingredientsName.length; i++) {
                if(ingredientsName[i] !== ''){
                    ingredients[i] = {ingredientsName: ingredientsName[i], ingredientsQuantity: ingredientsQuantity[i]};
                }
            }
        }
        if (typeof step === 'string') {
            steps[0] = {step: step, picture: ''};
        } else {
            for (let i = 0; i < step.length; i++) {
                if( step[i] !== ''){
                    steps[i] = {step: step[i], picture: ''}
                }
            }
        }

        try {
            recipe.name= recipeName;
            recipe.prepTime= parseInt(recipePrepTime);
            recipe.totalTime= parseInt(recipeTotalTime);
            recipe.utensils= utensils;
            recipe.ingredients= ingredients;
            recipe.steps= steps;

            await recipe.save();
            res.redirect('/login');
        } catch (e) {
            res.render('register', {msg: "An error has occurred. Please try again later."});
            console.log(e);
        }
    } else {
        res.redirect('/login');
    }
}
