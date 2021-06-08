const Question = require('../model/Question')

module.exports = {
    async insert(request, response) {
        const { content_id, question, alt_a, alt_b, alt_c, alt_d, answer } = request.body

        await Question.create({
            content_id,
            question,
            alt_a,
            alt_b,
            alt_c,
            alt_d,
            answer
        })

        return response.status(201).send()
    },

    async select(request, response) {
        const { content } = request.query

        const questions = await Question.find({content_id: content})

        return response.json(questions)
    },
}