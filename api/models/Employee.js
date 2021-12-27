const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String, // ENUM?
        required: [true, 'Name is required'],
    },
    status: {
        type: String,
        required: [true, 'Status is required']
    }
}, { timestamps: true }); // timestamps for filtering 

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;