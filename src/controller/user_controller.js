const User = require('../model/User')

module.exports = {
    async insert(request, response) {
        const { name, user, email, password } = request.body

        const check_user = await User.findOne({ user: user })
        const check_mail = await User.findOne({ email: email })

        if (check_user !== null) {
            return response.json({ result: 'user' })
        } else {
            if (check_mail !== null) {
                return response.json({ result: 'mail' })
            } else {
                await User.create({
                    name,
                    user,
                    email,
                    password
                })

                const user_id = await User.findOne({ user: user })

                return response.json(user_id)
            }
        }

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