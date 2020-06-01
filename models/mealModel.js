const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    day: Number,
    type: String,
    food: String,
    cook: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);