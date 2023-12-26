const mongoose = require('mongoose')
const menuSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
},
);
module.exports = mongoose.model('Menus', menuSchema)
