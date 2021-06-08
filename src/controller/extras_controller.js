const Extra = require('../model/Extra')

module.exports = {
    async insert(request, response) {
        const { content_id, name, type, link } = request.body

        await Extra.create({
            content_id,
            name,
            type,
            link
        })

        return response.status(201).send()
    },

    async select(request, response) {
        const { content } = request.query

        const extras = await Extra.find({content_id: content})

        return response.json(extras)
    },
}