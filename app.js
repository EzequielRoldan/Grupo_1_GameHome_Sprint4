const express = require('express');
const path= require('path');
const app = express();
const port = 3030;

// vistas y public static
app.use(express.static('public'));
app.set('view engine', 'ejs');
// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));


//Require de las rutas
const usersRutas= require('./src/routes/usersRutas')
const productRutas= require('./src/routes/productRutas')



app.listen(process.env.PORT ||port, () => console.log(`Servidor Funcionando! ${port}!`))



//Ruta product
app.use('/', productRutas)



//Ruta users
app.use('/usuario',usersRutas)


