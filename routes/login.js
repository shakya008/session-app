var express = require('express');
var router = express.Router();
var Users = require("../controllers/usersController");

/* GET home page. */
var sess;
router.post('/login', function(req, res) {
sess = req.session;
sess.email = req.body.email;
sess.password = req.body.password;
	console.log('shyama login');
	

  res.send('shyam');
});
router.get('/admin', function(req, res) {
console.log(req.session.email);

  res.send('shyam');
});

router.post("/register", Users.registerUser);
router.get("/userAvail", Users.checkAvailability);
module.exports = router;
