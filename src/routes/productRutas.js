const express= require('express');
const router= express.Router();


/*Con esta variable llamo a mi archivo localizado en la carpeta CONTROLLER*/ 
let productController= require('../controllers/productController');

router.get('/', productController.index);


router.get('/editarProducto', productController.edit);


router.get('/carrito', productController.cart);


/**Crear Producto **/
router.get('/products/create', productController.add);



/*Detalle de producto**/ 
router.get('/products/:id', productController.detail);

module.exports= router;