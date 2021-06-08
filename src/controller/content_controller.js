const Content = require('../model/Content')

module.exports = {
    async insert(request, response) {
        const { component_id, name, link } = request.body

        await Content.create({
            component_id,
            name,
            link
        })

        return response.status(201).send()
    },

    async select_one(request, response) {
        const { component } = request.query

        const contents = await Content.find({ component_id: component })

        return response.json(contents)
    },
}