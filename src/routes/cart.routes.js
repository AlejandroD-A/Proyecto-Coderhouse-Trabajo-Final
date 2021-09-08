const express = require('express')
const router  = express.Router()

const CartCtrl = require('../controllers/CartController')
const checkAuth = require('../middlewares/checkAuth')

router.get('/listar/:id?',checkAuth, CartCtrl.listar)
router.post('/agregar/:id_producto', checkAuth, CartCtrl.agregar)
router.delete('/borrar/:id', checkAuth, CartCtrl.borrar)


module.exports = router