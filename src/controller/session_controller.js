const User = require('../model/User')

module.exports = {
    async select(request, response) {
        const { user, pswd } = request.query
        let data = {}

        const query_result = await User.findOne(user.search('@') !== -1 ? { email: user } : { user: user })

        if (query_result === undefined || query_result === null) {
            data = {
                result: 404
            }
        } else {
            if (query_result.password !== pswd) {
                data = {
                    result: 401
                }
            } else {
                data = {
                    id: query_result.id,
                    name: query_result.name,
                    user: query_result.user,
                    email: query_result.email,
                    password: query_result.password,
                    result: 200
                }
            }
        }

        return response.json(data)
    },
}