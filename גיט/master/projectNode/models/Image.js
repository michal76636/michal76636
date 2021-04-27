const mongoose= require('mongoose');
const user = require('./User')

const imageSchema = mongoose.Schema({

    date: {
        type:String,
        length:10
    },
    title: {
        type:String
    },
    url: {
        type:String
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
});

module.exports = mongoose.model('Image', imageSchema);
