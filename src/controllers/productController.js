
const jsonDb = require('../model/jsonDatabase')

const productModel = jsonDb('products')



const productController = {
    index: (req,res)=>{

            let products = productModel.all()
        res.render('products/index',{products})
    },
    edit: (req,res)=>{
        res.render('products/editProduct')
    },
    add: (req,res)=>{
        res.render('products/productAdd')
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