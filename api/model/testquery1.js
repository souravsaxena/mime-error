const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    psw: {
        type: String
    },
    pswrepeat: {
        type: String
    },
   
    email:{
        type:String
    }
},
);
module.exports = mongoose.model('User', user); 