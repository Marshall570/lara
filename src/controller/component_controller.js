const Component = require('../model/Component')

module.exports = {
    async insert(request, response) {
        const { axis, name } = request.body

        await Component.create({
            axis,
            name
        })

        return response.status(201).send()
    },

    async select(request, response) {
        const components = await Component.find()

        return response.json(components)
    },

    async select_one(request, response) {
        const { axis } = request.query

        const components = await Component.find({ axis: axis })
        console.log(components)
        return response.json(components)
    }
}