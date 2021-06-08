const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    content_id: {
        type: String,
    },
    question: {
        type: String
    },
    alt_a: {
        type: String
    },
    alt_b: {
        type: String
    },
    alt_c: {
        type: String
    },
    alt_d: {
        type: String
    },
    answer: {
        type: String
    },
})

module.exports = mongoose.model('questions', QuestionSchema)
