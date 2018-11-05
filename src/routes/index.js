const express = require('express');

//creamos la constante que se encargara de las rutas
const router = express.Router();


//importamos funcionalidades
//controllers
const IndexController = require('../controllers/index');

//primer para metro es la ruta para index(default page)
//segundo parametro es la funcionalidad
router.get('/', IndexController.index);

router.get('/productos', IndexController.listaProductos);

router.post('/nuevoProducto', IndexController.nuevoProducto)


module.exports = router;