const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    contact: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    bloodGroup: {
        required: true,
        type: String
    },
    lasteditedTime: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('users', dataSchema)
