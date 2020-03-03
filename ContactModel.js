var moongose = require('mongoose');

//setup schema
var contactSchema = moongose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    phone : String,
    create_date:{
        type:Date,
        default: Date.now
    }
}); 

//Export Contact Model
 var contacts = module.exports = moongose.model('Contact',contactSchema);

 module.exports.get = function(callback,limit){
    contacts.find(callback).limit(limit);
 }