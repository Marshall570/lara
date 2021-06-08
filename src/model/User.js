const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('users', UserSchema)
