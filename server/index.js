require('dotenv').config()
const express = require('express')
const port = process.env.PORT
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const routes = require('./settings/routes')
routes(app)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})