const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    email: {
        type: String
    },
    password: {
        type: password
    },
    repeatpassword: {
        type: password
    }
    
);
module.exports = mongoose.model('User', user); 