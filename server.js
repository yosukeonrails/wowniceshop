
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config= require('./config');

/*FACEBOOK*/
// var passport= require('passport');
// var FacebookStrategy = require('passport-facebook').Strategy;
// var FacebookUser= require('./models/facebookuser.js');
// var LocalStrategy = require('passport-local').Strategy;

/*User*/
//var User= require('./models/user.js');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//
// mongoose.createConnection('mongodb://localhost/');
//
// mongoose.connection.on('error', function(err) {
//     console.error('Could not connect.  Error:', err);
// });



// app.use(express.static('build'));

var jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(bodyParser.json());
app.use(express.static('build'));


app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, done) {
//       console.log(user);
//     done(null, user._id);
//
// });

// used to deserialize the user
// passport.deserializeUser(function(id, done) {
//
//     FacebookUser.findById(id, function(err, user) {
//             console.log(user);
//         done(err, user);
//     });
//
// });




var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }
        app.listen( config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};


if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}
