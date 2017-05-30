"use strict";

let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let FacebookStrategy = require('passport-facebook').Strategy;
let TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let sequelize = require('sequelize');

module.exports = app => {

    let User = app.models.user.User;

    var emailid = 0;
    var photo = null;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
            console.log("working in serilize");
            done(null, user);
        });

    passport.deserializeUser(function(user, done) {
        console.log("working in deserilize1");
        User.findById(user.id).then(user=>{
            console.log("working in deserilize2");
            done(null, user);
        }).catch(err=>{
            done(err, null);
        }) 
    });

// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        process.nextTick(function() {

            console.log(req.user);
            if(!req.user){
                User.find({ where: {username: username} }).then(function(user) {
                    if (user) {
                        var test = user.validPassword(password);
                        if(test){
                            user.password = undefined;
                            return done(null, user);
                        }
                    } else {
                        return done(null, false, { message: 'invalid email or password' });
                    }

                }).catch(err=>{
                    console.log(err);
                });
            }
            else
            {   
                var userId = req.user.id;

                User.update(
                {
                    username: username,
                    password:password
                },
                {
                    where: { 
                        id:userId
                    }
                }
                ).then(function(){
                    console.log("updated successfully");
                    return done(null, user);
                }).catch(function(e){
                    console.log("updating faile"+e);
                    return done(err);
                })
            }

        });
    }));

    return passport;
}
