const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    subject: {
        type: String
    }
  
},
);
module.exports = mongoose.model('User', user); 