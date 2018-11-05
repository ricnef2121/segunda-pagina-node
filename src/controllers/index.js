//creamos una constante de prueba la cual sera un arreglo
//en el cual tendremos tres productos, despues este arreglo
//sera pintado en el html de productos,mandando el arreglo items
//dentro de una varibale productos
const items = [
    { id: 1, name: 'producto 1' },
    { id: 2, name: 'producto 2' },
    { id: 3, name: 'producto 3' }
];

//defininimos unna constante por cada funcionalidad
//y se exportan, despues se importan donde se necesiten
const index = (req, res) => {
    res.render('index.html', { title: 'Inicio' });
};

const listaProductos = (req, res, next) => {
    res.render('productos.html', {
        title: 'Productos',
        productos: items
    });
};

const nuevoProducto = (req, res, next) => {
    console.log(req.body);

    //guardamos lo que se envie atraves del input dentro de una socntante
    //const nuevoP = req.body.nuevoP;
    //el codigo de arriba se simplica con el siguiente
    const { nuevoP } = req.body;

    //bien, ahora se lo agregamos al arreglo de items
    items.push({
        id: items.length + 1, //de esta manera hacemos que sea autoincrementable el id
        name: nuevoP, //de esta manera pasamos a la propiedad name
        //el valor del input
    });
    //y al final redireccionamos a la pagina de productos
    //para que se refesque la pagina y muestre el producto en la
    //lista de productos
    res.redirect('/productos');
}

module.exports = {
    index,
    listaProductos,
    nuevoProducto
}