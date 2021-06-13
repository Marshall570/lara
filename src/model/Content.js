const mongoose = require('mongoose')

const ContentSchema = mongoose.Schema({
    component_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'components'
    },
    name: {
        type: String
    }
})

module.exports = mongoose.model('contents', ContentSchema)
