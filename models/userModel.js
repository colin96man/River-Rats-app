const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: String,
    avatar: String,
    googleId: String
}, 
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);