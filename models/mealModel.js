const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    day: Number,
    foodType: String, //breakfast or dinner
    dish: String, // what the user is signing up to make
    cook: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Meal', mealSchema);