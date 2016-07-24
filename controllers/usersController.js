var registrationSchema = require("../models/users");
function registerUser(req, res) {
        console.log("got the request");
        var schemaObj = {
                "f_name": req.body.f_name,
                "l_name": req.body.l_name,
                "email" : req.body.email,
                "passwd": req.body.passwd
        }
        var newSchema = new registrationSchema(schemaObj);
        registrationSchema.find({"email": schemaObj.email}, 'email', function(err, user){
                if(err){
                    console.log(err);
                    res.json(err);
                } else if(user.length > 0){
                    console.log(user);
                    res.json({"msg" : "User name already exist"});
                } else {
                    newSchema.save(function(err, model){
                        if(err){
                            console.log(err);
                            res.json(err);
                        } else {
                            res.json(model);
                        }
                    })
                }
        });
};
var session;
function login(req, res){
    var email = req.body.email;
    var passwd = req.body.passwd;
    registrationSchema.findOne({"email": email}, function(err, user){
        console.log(user);
        var obj = {
                "success": false
            };
        if(err){
            res.json(err);
        } else if(user){
            console.log(passwd, req.body.passwd);
            if(user.passwd === passwd){
                obj.user = user;
                obj.success = true;
                session = req.session;
                session.user = user;
                res.json(obj);
            } else {
                obj.msg = "user name or password does not match";
                res.json(obj);
            }
        } else{
            obj.msg = "user name or password does not match!!";
            res.json(obj);
        }
    })
};
function checkAvailability(req, res){
    console.log(req.query);
    registrationSchema.find(req.query, function(err, users){
        if(err){
            res.send(err);
        } else {
            res.send(users);
        }
    })
}
function logoutUser(req, res){
    req.session.destroy(function(err) {
        if(err) {
            console.log(err);
        } else {
            session = null;
            res.json({"success" : true});
        }
    });
}

function checkSession(req, res){
    var isActive = req.session.user && true;
    console.log(req.session.user.email);
    res.json({"isActive": isActive});
}
module.exports = {
    registerUser : registerUser,
           login : login,
    checkAvailability : checkAvailability,
    logoutUser : logoutUser,
    checkSession : checkSession
};
