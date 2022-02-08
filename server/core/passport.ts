import passport from "passport";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import dotenv from 'dotenv'

dotenv.config()

passport.use(
    'google',
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback"
    },
    // @ts-ignore
    function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken, refreshToken, profile, cb)
        // @ts-ignore
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            console.log(err, user)
            // return cb(err, user);
        });
    }
));
export {passport}