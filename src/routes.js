const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const { celebrate, Joi, Segments } = require('celebrate')

const user_controller = require('./controller/user_controller')
const component_controller = require('./controller/component_controller')
const content_controller = require('./controller/content_controller')
const extra_controller = require('./controller/extras_controller')
const question_controller = require('./controller/question_controller')
const session_controller = require('./controller/session_controller')


const routes = express.Router()

// USER ROUTES
routes.post('/user', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        user: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
}), user_controller.insert)

routes.get('/user', user_controller.select)

routes.put('/user', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        id: Joi.string().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        user: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
    })
}),  user_controller.update)

routes.put('/pic', multer(multerConfig).single('file'), (request, response) => {
    return response.status(200).send()
})


// COMPONENT ROUTES
routes.post('/component', celebrate({
    [Segments.BODY]: Joi.object().keys({
        axis: Joi.string().required(),
        name: Joi.string().required()
    })
}), component_controller.insert)

routes.get('/component', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        axis: Joi.string().required()
    })
}), component_controller.select_one)



// CONTENT ROUTES
routes.post('/content', celebrate({
    [Segments.BODY]: Joi.object().keys({
        component_id: Joi.string().required(),
        name: Joi.string().required(),
        link: Joi.string().allow('')
    })
}), content_controller.insert)

routes.get('/content', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        component: Joi.string().required()
    })
}), content_controller.select_one)



// EXTRAS ROUTE
routes.post('/extra', celebrate({
    [Segments.BODY]: Joi.object().keys({
        content_id: Joi.string().required(),
        name: Joi.string().required(),
        content_type: Joi.string().required(),
        link: Joi.string().required()
    })
}), extra_controller.insert)

routes.get('/extra', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        content: Joi.string().required()
    })
}), extra_controller.select)



// QUESTIONS ROUTE
routes.post('/question', celebrate({
    [Segments.BODY]: Joi.object().keys({
        content_id: Joi.string().required(),
        question: Joi.string().required(),
        alt_a: Joi.string().required(),
        alt_b: Joi.string().required(),
        alt_c: Joi.string().required(),
        alt_d: Joi.string().required(),
        answer: Joi.string().required(),
    })
}), question_controller.insert)

routes.get('/question', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        content: Joi.string().required()
    })
}), question_controller.select)



// SESSION ROUTES
routes.get('/session', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        user: Joi.string().required(),
        pswd: Joi.string().required(),
    })
}), session_controller.select)

module.exports = routes
