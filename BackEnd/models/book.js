const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('book', bookSchema);