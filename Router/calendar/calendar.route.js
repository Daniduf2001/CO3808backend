const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {google} = require('googleapis');
require('dotenv').config();
const SCOPES = ['https://www.googleapis.com/auth/calendar'];


const auth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

router.get('/google', (request, response) => {
    const url = auth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    })

    response.redirect(url);
})

router.get('/google/redirect', (request, response) => {
    response.send('its working')
})


module.exports = router;