const mongoose = require('mongoose');
const playerSchema = mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Player', playerSchema);
