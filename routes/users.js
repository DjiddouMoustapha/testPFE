var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var passport = require('passport');


/* GET users listing. */
router.post('/login', function(req, res, next) {

getUserBylogin= function(login, callback){
	var query = {login: login}
	User.findOne(query,callback);
}

ComparePassword = function(candidatePassword, hash, cb) {
    var user = this;
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
            cb(null, isMatch);
    });
}

const login = req.body.login;
const password = req.body.password;

getUserBylogin(login, function(err, user){
	if(err) throw err;
	if (!user) {
		return res.json({success : false, msg :"user not found"});
	}
ComparePassword(password,user.password, function(err,isMatch){
		if(err) throw err;
		if(isMatch){
			//const token = jwt.sign(user,config.secret,{
			//	expiresIn: 604800
			//});
			res.json({
				success : true, 
				//token : 'JWT '+token, 
				user: {
					id: user._id,
					login: user.login,
					ville: user.ville
					

				}
			});
		}
		else{
			res.json({success : false, msg :"wrong password"});
		}
	});

});
  
});


router.post('/suscribe', function(req, res, next) {

  ajouterUser =  function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
        // Store hash in your password DB. 
        if(err) throw err;
        newUser.password= hash;
        newUser.save(callback);
    });
}); 

}
let newUser = new User({

 	login : req.body.login,
 	password : req.body.password,
 	ville : req.body.ville

 });

 ajouterUser(newUser, (err,User) => {

	if(err){
		res.json({success : false, msg :"erreur de register"});
	}
	else{
		res.json({success : true, msg :"success to register user"});
	}
});



  
});


router.get('/admin', function(req, res, next) {
  User.find().exec(function(err, user){
        if(err){
            res.json({error: err});
        }else{
            res.send(user);
        }
    });
});




module.exports = router;
