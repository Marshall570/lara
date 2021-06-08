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

        return response.status(201).send()
    },

    async select(request, response) {
        const users = await User.find()

        return response.json(users)
    },
}