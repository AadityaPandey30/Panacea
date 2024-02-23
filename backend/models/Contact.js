const mongoose=require('mongoose');

const ContactSchema=mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
});

const Contact=mongoose.model('contactUs',ContactSchema);

module.exports=Contact;