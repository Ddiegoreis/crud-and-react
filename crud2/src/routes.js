const express = require('express')

const routes = express.Router()

const ProductController = require('./controllers/ProductController')

routes.get('/productList', ProductController.index)
routes.post('/createProduct', ProductController.create)
routes.put('/updateProduct', ProductController.update)
routes.delete('/deleteProduct/:cProduto', ProductController.delete)

module.exports = routes