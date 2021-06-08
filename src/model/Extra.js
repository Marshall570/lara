const mongoose = require('mongoose')

const ExtraSchema = mongoose.Schema({
    content_id: {
        type: String
    },
    name: {
        type: String
    },
    content_type: {
        type: String
    },
    link: {
        type: String
    }

})

module.exports = mongoose.model('extras', ExtraSchema)
