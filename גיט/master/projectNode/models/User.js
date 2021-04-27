const mongoose= require('mongoose');
const userSchema = mongoose.Schema({

    name: {
        type: String,
    },
    password: {
        type: String,
        //  trim: true, minLength: '4'
    },
    userId:{
        type: String,

    },
    url: {
        type:String
    },
    Images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
    }]
    // history:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'History'
    // }]
});

module.exports = mongoose.model('User', userSchema);
