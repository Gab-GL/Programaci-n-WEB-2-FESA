// -------- DATOS --------
let productos =[
    {nombre: 'camisa',   precio: 300},
    {nombre: 'pantalon', precio: 550},
    {nombre: 'zapatos',  precio: 750},
    {nombre: 'sombrero', precio: 550},
    {nombre: 'tenis',    precio: 1200}
];

let carrito = [];

function mostrarMenu(){
    return parseInt(prompt(`
Opciones disponibles:
1.- Agregar producto al carrito
2.- Ver carrito
3.- Agregar nuevo producto
4.- Salir
Elige una opción:
`));
}


// 1. Agregar producto existente al carrito
function agregarAlCarrito(){
    let mensaje = "Productos disponibles:\n";

    productos.forEach((prod, index)=>{
        mensaje += `${index+1}.- ${prod.nombre} - $${prod.precio}\n`;
    });

    let opcion = parseInt(prompt(mensaje + "\nSelecciona un producto:"));

    if(opcion > 0 && opcion <= productos.length){
        carrito.push(productos[opcion - 1]);
        alert(`Producto ${productos[opcion - 1].nombre} agregado`);
    } else {
        alert("Opción inválida");
    }
}

// 2. Ver carrito
function verCarrito(){
    if(carrito.length === 0){
        alert("El carrito está vacío");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;

        carrito.forEach((prod, index)=>{
            mensaje += `${index+1}.- ${prod.nombre} - $${prod.precio}\n`;
            total += prod.precio;
        });

        mensaje += `\nTotal: $${total}`;
        alert(mensaje);
    }
}

// 3. Agregar nuevo producto
function agregarProducto(){
    let nombre = prompt("Nombre del producto:");
    let precio = parseFloat(prompt("Precio del producto:"));

    if(nombre && !isNaN(precio)){
        productos.push({
            nombre: nombre,
            precio: precio
        });
        alert("Producto agregado correctamente");
    } else {
        alert("Datos inválidos");
    }
}

function iniciarPrograma(){

    let activo = true;

    while(activo){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1:
                agregarAlCarrito();
                break;

            case 2:
                verCarrito();
                break;

            case 3:
                agregarProducto();
                break;

            case 4:
                activo = false;
                alert("Saliendo del programa");
                break;

            default:
                alert("Opción no válida");
        }
    }
}

iniciarPrograma();