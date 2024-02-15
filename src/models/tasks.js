const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    id: Number,
    title: String
});

module.exports = mongoose.model('Tasks', tasksSchema);