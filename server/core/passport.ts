import passport from "passport";
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import {VerifyCallback, Profile} from "passport-google-oauth20";




passport.use(
    'google',
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback"
    },

    function(accessToken:string, refreshToken:string, profile: Profile, cb:VerifyCallback) {
        const user ={
            fullName: profile.displayName,
            avatar: profile.photos?.[0].valueOf
        }
        console.log(user)
        console.log(accessToken, refreshToken, profile, cb)
    }
));
export {passport}