var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);



app.use(session({secret: 'ssshhhhh',
                    resave: false,
                  saveUninitialized: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

var sess;

app.get('/',function(req,res){
sess = req.session;
console.log("hi this for testing");
//console.log(sess);
//Session set when user Request our app via URL
//if(sess.email) {
/*
* This line check Session existence.
* If it existed will do some action.
*/
    res.redirect('/admin');
/*}
else {
    res.render('index.html');
}*/
});

app.post('/login',function(req,res){
  sess = req.session;
//In this we are assigning email to sess.email variable.
//email comes from HTML page.
  sess.email=req.body.email;
  res.end('done');
});
app.get('/admin',function(req,res){
  sess = req.session;
  console.log(sess);
  //console.log('Cookies: ', req.cookies);
if(sess.email) {
res.write('<h1>Hello '+sess.email+'</h1>');
res.end('<a href="/logout">Logout</a>');
} else {
    res.write('<h1>Please login first.</h1>');
    res.end('<a href="/">Login</a>');
}
});

app.get('/logout',function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});
});

app.listen(5000);
