const express = require('express');
const router = express.Router();

const recipeModule = require('../modules/recipe.js');

const credentials = require("../database/credentials.js");
const dbUrl = "mongodb+srv://"+ credentials.username + ':' + credentials.password + '@' + credentials.host + '/' + 'photos';

const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer  = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

//Create Mongo Connection
const conn  = mongoose.createConnection(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});


let gfs = null;

conn.once('open', () =>{
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
});

//Create Storage Engine
const storage = new GridFsStorage({
    url: dbUrl,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'photos'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });

router.get('/', checkAuthenticated, recipeModule.recipePage);
router.get('/create',checkAuthenticated, recipeModule.createRecipePage);

router.post('/create',checkAuthenticated ,upload.single('picture1'),recipeModule.saveRecipe);

router.get('/image/:filename', async(req, res, next) => {
    await gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(!file || file.length ===0) {
            return res.status(404).json({err: 'NO File Exists'});
        }

        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    });
});


router.post('/delete/:id', checkAuthenticated,recipeModule.delete);

router.get('/edit/:id', checkAuthenticated,recipeModule.edit);

router.post('/save', checkAuthenticated, recipeModule.saveAfterEdit);

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/recipes');
    }
    next();
}

module.exports = router;