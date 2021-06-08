require('dotenv/config')
const express = require('express')
const { errors } = require('celebrate')
const routes = require('./routes')
const mongoose = require('mongoose')
const morgan = require('morgan')

mongoose.connect(
    process.env.MONGO_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

const app = express()

app.use(express.json())
app.use(errors())
app.use(routes)
app.use(morgan('dev'))
app.listen(process.env.PORT || 3210)

module.exports = app
