const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('users', UserSchema)
