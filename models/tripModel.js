const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    location: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: Date,
    picture: String,
    length: Number,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    }],
    meals: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }]
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);