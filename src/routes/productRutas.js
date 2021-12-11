const express= require('express');
const router= express.Router();


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let productController= require('../controllers/productController');

router.get('/', productController.index);
router.get('/editarProducto', productController.edit);
router.get('/agregarProducto', productController.add);
router.get('/detalleDeProducto', productController.detail);
router.get('/carrito', productController.cart);

module.exports= router;