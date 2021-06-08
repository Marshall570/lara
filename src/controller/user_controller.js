const User = require('../model/User')

module.exports = {
    async insert(request, response) {
        const { name, user, email, password } = request.body

        await User.create({
            name,
            user,
            email,
            password
        })

        const user_id = await User.findOne({user: user})

        return response.json(user_id)
    },

    async select(request, response) {
        const users = await User.find()

        return response.json(users)
    },

    async update(request, response) {
        const { id } = request.query
        const { name, user, email, password } = request.body

        await User.updateOne({
            _id: id
        }, {
            name: name,
            user: user,
            email: email,
            password: password
        })

        return response.status(200).send()
    }
}