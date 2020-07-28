const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    pwd: String
});

module.exports = mongoose.model('Teacher', TeacherSchema);