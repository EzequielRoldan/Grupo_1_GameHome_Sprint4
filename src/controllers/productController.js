
const jsonDb = require('../model/jsonDatabase')

const productModel = jsonDb('products')



const productController = {
    index: (req,res)=>{

            let products = productModel.all()
        res.render('products/index',{products})
    },
    all: (req,res)=>{
    
        let products = productModel.all()
        res.render('products/products',{products})
    
},
    edit: (req,res)=>{
        res.render('products/editProduct')
    },
    add: (req,res)=>{
        res.render('products/productAdd');

    },
    store: (req, res) => {
        let row = req.body
        
        if(req.file){
            row.image = req.file.filename
        }else{
            row.image = 'default-image.png'
        }

        console.log(req.body);

        productModel.create(row) 

        res.redirect('products')
    },

    detail: function (req,res) {

        let id = req.params.id

        let producto = productModel.find(id)
        let products = productModel.all()
        res.render('products/productDetail',{producto,products})
    },
    cart: (req,res)=>{
        res.render('products/productCart')
    }

}

module.exports=productController;