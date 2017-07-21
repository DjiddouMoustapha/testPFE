var mongoose =require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var userShema = new Schema({
    
    
     login: {
     	type : String,
        require: true
     },
      password: {
     	type : String,
     	require: true
     },
      ville: {
     	type : String
     },
     
});
module.exports = mongoose.model('user', userShema);