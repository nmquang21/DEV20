var mongoose = require('mongoose');

module.exports = mongoose.model('QUANG',{
    rollnumber: String,
    fullname: String,
    email: String,
    avatarUrl: String,
});