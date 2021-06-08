const mongoose = require('mongoose')

const ComponentSchema = mongoose.Schema({
    axis: {
        type: String
    },
    name: {
        type: String
    },
    icon: {
        type: String
    }
})

module.exports = mongoose.model('components', ComponentSchema)
