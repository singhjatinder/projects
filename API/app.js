if(process.env.NODE_ENV !== "production"){
    require('dotenv/config');
}

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override')


require('./passsport-config')(passport);

const app = express();

const port = process.env.PORT || 3000;
// static resources
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname +'/uploads'));


app.engine('handlebars', handlebars({defaultLayout: 'main',
    helpers: {
        toJSON : function(object) {
            return JSON.stringify(object);
        },
        times: function(n, block) {
            let accum = '';
            for(let i = 0; i < n; ++i) {
                block.data.index = i;
                block.data.first = i === 0;
                block.data.last = i === (n - 1);
                accum += block.fn(this);
            }
            return accum;
        },
        addOne: (index)=> {
            index = parseFloat(index);
            return index+1;
        }
    },
    partialsDir: __dirname+'/views/partial'
}));

app.set('view engine', 'handlebars');

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/index');
const recipeRoutes = require('./routes/recipeRoutes');
const slackRoutes = require('./routes/slack');

// Routing Login Page
app.use('/', routes);
app.use('/recipes', recipeRoutes);
app.use('/slack', slackRoutes);


app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// start the server listening for requests
app.listen(port,
    () => console.log("Server is running..." + port));