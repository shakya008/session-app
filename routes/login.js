var express = require('express');
var router = express.Router();
var Users = require("../controllers/usersController");

/* GET home page. */

router.post('/login', Users.login);
router.get('/admin', function(req, res) {
console.log(req.session.email);

  res.send('shyam');
});

router.post("/register", Users.registerUser);
router.get("/userAvail", Users.checkAvailability);
router.get("/logout", Users.logoutUser);
router.get("/isActive", Users.checkSession);

module.exports = router;
