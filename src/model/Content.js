const mongoose = require('mongoose')

const ContentSchema = mongoose.Schema({
    component_id: {
        type: String
    },
    name: {
        type: String
    },
    link: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('contents', ContentSchema)
