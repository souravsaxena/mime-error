const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contact = new Schema({
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
module.exports = mongoose.model('contact', Contact); 