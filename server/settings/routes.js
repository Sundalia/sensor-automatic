'use strict'

module.exports = (app) => {
    const indexController = require('../Controller/IndexController')
    const usersController = require('../Controller/UsersController')
    const productController = require('../Controller/ProductController')
    app.route('/').get(indexController.index)
    app.route('/users').get(usersController.users)
    app.route('/products').get(productController.products)
    app.route('/products/add').post(productController.add)
}