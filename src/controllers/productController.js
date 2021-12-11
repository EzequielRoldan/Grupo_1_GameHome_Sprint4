let listaProductos = [
    {
        nombre:"Mouse Glorious Model D Minus - Matte Black",
        categoria:"Periféricos/componentes",
        precio:"$6.000",
        codigo:"01",
        descripcion:"",
        imagen:"images/mouse.jpg"
    },
    {
        nombre:"Teclado Mecanico Logitech G915 Lightspeed RGB",
        categoria:"Periféricos/componentes",
        precio:"$24.590",
        codigo:"02",
        descripcion:"",
        imagen:"images/teclado.jpg"
    },
    {
        nombre:"Silla Gamer HHGears SM-115 Negro Hasta 90kg r",
        categoria:"Sillas gamer",
        precio:"$20.000",
        codigo:"03",
        descripcion:"",
        imagen:"images/silla-product.jpg"
    },
    {
        nombre:"Monitor LG 20 20MK400H-B VGA HDMI",
        categoria:"Pc/Notebook",
        precio:"$21.950",
        codigo:"04",
        descripcion:"",
        imagen:"images/monitor.jpg"
    },
    {
        nombre:"Auriculares HyperX Cloud Orbit S 7.1 3D Planar",
        categoria:"Audio",
        precio:"$29.910",
        codigo:"05",
        descripcion:"Auriculares marca Hyper X, en color negro/gris, cuenta con usb, microfono y conectividad Android por Mini Plug,PC,Nintendo Switch,PS4,Xbox One",
        imagen:"images/auriculares.jpg"
    }

]


const productController = {
    index: (req,res)=>{
        res.render('products/index',{productos:listaProductos})
    },
    edit: (req,res)=>{
        res.render('products/editProduct')
    },
    add: (req,res)=>{
        res.render('products/productAdd')
    },
    detail: function (req,res) {
        res.render('products/productDetail',{productos:listaProductos})
    },
    cart: (req,res)=>{
        res.render('products/productCart')
    }

}

module.exports=productController;