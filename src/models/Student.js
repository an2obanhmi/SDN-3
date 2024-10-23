const mongoose = require('../config/mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentCode: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;