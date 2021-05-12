if(process.env.NODE_ENV !== "production"){
    require('dotenv/config');
}

const userDB = require('./database/userDB.js');
const Users = userDB.getModel();
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');

module.exports.register = async (req, res, next) => {

    let fName = req.body.fName;
    let lName = req.body.lName;
    let pwd = req.body.pwd;
    let email = req.body.email;
    let existingUser;
    try{
        existingUser = await Users.findOne({email: email.toLowerCase()});
    }catch (e){
        console.log(e);
    }

    if(!existingUser){
        try{
            const hashPassword = await bcrypt.hash(pwd, 10);
            let user = new Users({
                fName: fName,
                lName: lName,
                pwd: hashPassword,
                email: email.toLowerCase(),
                level: 'admin'
            });

            await Promise.all([
                user.save()
            ]).catch(err => console.log('${err}}'));
            res.render('login', { msg: "The user was added successfully. Please Login now."});
        }catch (e) {
            res.render('register', { msg: "An error has occurred. Please try again later."});
            console.log(e);
        }
    }else{
        res.render('register', { msg: "The email already exists. Please enter another email"});
    }
};

module.exports.registerPage = (req, res) => {
    res.render('register');
}

module.exports.user = (req, res, next)=>{
    res.render('login');
}

module.exports.userDetails = async (req, res, next) => {

    let id = req.user.id;

    try {
        let user = await Users.findById(id).lean();

        if (user) {
            res.render('user', {user: user});
        } else {
            res.render('404');
        }

    } catch (e) {
        res.render('404');
        console.log(e);
    }
}

module.exports.resetpassword = (req, res, next) => {
    let email = req.body.email;
    sgMail.setApiKey(process.env.EMAIL_API_KEY);
    const msg = {
        to: email, // Change to your recipient
        from: 'singhjay269@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
        })
        .catch((error) => {
            console.error(error.response.body);
        });
    res.redirect('/login');
}
module.exports.resetPage = (req, res, next) => {
    res.render('reset');
}