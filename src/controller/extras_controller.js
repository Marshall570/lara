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
        const extras = await Extra.find()

        return response.json(extras)
    }
}