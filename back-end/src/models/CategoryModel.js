const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
}, {timestamps: true});

const category = mongoose.model('category', categorySchema);

module.exports = category;