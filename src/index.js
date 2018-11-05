//importamos los modulos necesarios para trabajar
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//settings
app.set('port', 3000);
//configuramos ejs para que reconosca los archivos html,
app.engine('html', require('ejs').renderFile);
//indicamos que ejs sera nuestro motor de plantilla
app.set('view engine', 'ejs');
//configuramos la ruta de nuestras vistas para que las reconosca node
app.set('views', path.join(__dirname, 'views'));


//midlewares
//app recibe un req, un res, y un next que continua con las rutas
//se procesan las urls: cada ves que me envie algo el navegador yo recibo ifromacion
//haremos que en consola responda con el request la url que ha pedido
//y el metodo atraves del cual se iso la peticion
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});
//aplicacion utiliza body parser par aque 
//node entienda la informacion que envia el navegador
app.use(bodyParser.json());
//usamos urlencoded paraq que tambien lo reconosca cuando sea enviado
//desde un formulario
app.use(bodyParser.urlencoded({ extended: false }));



//routes
//requerimos el archivo que contendra nuestras rutas
app.use(require('./routes'))


//static files
//configuramos node para que sepa donde esta la ruta de los
//archivos estaticos(imagenes,css,scripts)
app.use(express.static(path.join(__dirname, 'public')));


//listening the server
//configuramos el puerto sobre el cual va correr en nuestro localhost
//y para comprobar que este conectado mandamos como segundo parametro
//una funcion anonima que imprimira un console.log
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});