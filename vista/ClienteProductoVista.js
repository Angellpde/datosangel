const express = require('express');
const cpControlador = require('../controlador/ClienteProductoControlador');
const router = express.Router();

router.get('/productos', cpControlador.todoProductos);
router.get('/buscarp/:t1', cpControlador.buscarPorPro);
module.exports = router; 