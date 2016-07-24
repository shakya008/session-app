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
function login(req, res){

};
function checkAvailability(req, res){
    registrationSchema.find(req.query, function(err, users){
        if(err){
            res.send(err);
        } else {
            res.send(users);
        }
    })
}
module.exports = {
    registerUser : registerUser,
    login        : login,
    checkAvailability : checkAvailability
};
