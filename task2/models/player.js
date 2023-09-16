const mongoose = require('mongoose');
const playerSchema = mongoose.Schema(
    {
        name: { type: String },
        age: { type: String },
        bio: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Player', playerSchema);
