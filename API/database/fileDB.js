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

module.exports.upload = upload;
module.exports.gfs = gfs;
























