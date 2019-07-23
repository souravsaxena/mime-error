const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String
    },
    psw: {
        type: String
    },
    pswrepeat: {
        type: String
    }
  
},
);
module.exports = mongoose.model('User', user); 