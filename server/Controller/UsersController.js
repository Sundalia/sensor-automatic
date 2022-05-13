'use strict'

const response = require('./../response')

exports.users = (req,res) => {
    const users = [
        {
            "id":1,
            "name":"Me"
        },
        {
            "id":2,
            "name":"You"
        }
    ]

    response.status(users, res)
}