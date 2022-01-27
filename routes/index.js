var express = require('express');
var router = express.Router();
const { isSignedIn } = require('../utils/auth');
const { ENVIRONMENT } = process.env;

/* GET home page. */
router.get('/', function(req, res, next) {
  var success_message = "";
  if(req.query.event == "upload_successful") {
    success_message = "Your file was uploaded successfully";
  }
  res.render('index', {
    title: 'Exhibit X',
    oauthClientID: process.env.OAUTH_CLIENT_ID,
    host: `${ENVIRONMENT === 'dev' ? 'http' : 'https'}://${req.get('host')}`,
    signedIn: isSignedIn(req),
    success_message });
});

module.exports = router;
