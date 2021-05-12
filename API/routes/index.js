const express = require('express');
const router = express.Router()
const passport = require('passport');

// other modules
const userModule = require("../userModule");

// router specs
router.get('/', (req, res, next) => {
    res.redirect('/login');
});

router.get('/register', checkNotAuthenticated, userModule.registerPage);
router.post('/register',  userModule.register);

router.get('/login', checkNotAuthenticated, userModule.user);

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),
    (req, res) => {
        res.redirect('/recipes');
    });


router.get('/user',checkAuthenticated, userModule.userDetails);

router.get('/reset' ,userModule.resetPage);
router.post('/reset', userModule.resetpassword);

router.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})

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

// router.get('/courses/add', 			addCourse);
// router.post('/courses/add', 		saveCourse);
//
// router.get('/courses/edit/:id', 	editCourse);
// router.post('/courses/edit/:id', 	saveAfterEdit);

module.exports = router;
