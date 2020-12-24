const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    haveSewers: {
        type: [String],
        default: undefined
    }
});

module.exports = mongoose.model("Roles", roleSchema);