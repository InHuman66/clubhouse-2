import express from 'express'
import {passport} from './core/passport'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3001

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/users/' + req.user);
    });
app.listen(port ,()=>{
    console.log(`server started at ${port}`)
})