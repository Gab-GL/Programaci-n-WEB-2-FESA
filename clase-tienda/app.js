// arreglo donde se guardan los productos que el cliente va agregando al carrito de compras
const carrito = [];

// definimos la clase producto donde se definen los productos que se van a vender en la tienda
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// funcion para agregar productos al carrito de compras
function agregarProducto(carrito, producto, cantidad) {
    const indice = carrito.findIndex((item) => item.producto.nombre === producto.nombre);

    if (indice !== -1) {
        // si ya existe, solo aumenta la cantidad
        carrito[indice].cantidad += cantidad;
    } else {
        carrito.push({ producto, cantidad });
    }

    mostrarCarrito(carrito);
}

// funcion para mostrar el carrito de compras
function mostrarCarrito(carrito) {
    const listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";

    let totalGeneral = 0; // total de toda la compra

    carrito.forEach((item) => {
        const li = document.createElement("li");

        const precioUnitario = item.producto.precio;
        const subtotal = precioUnitario * item.cantidad;

        totalGeneral += subtotal;

        li.textContent = `${item.producto.nombre} | Precio unitario: $${precioUnitario.toFixed(2)} | Cantidad: ${item.cantidad} | Subtotal: $${subtotal.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    // mostrar total general
    const total = document.createElement("p");
    total.textContent = `Total: $${totalGeneral.toFixed(2)}`;
    listaCarrito.appendChild(total);
}

// eventos para agregar productos al carrito de compras
document.getElementById("formulario").addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProducto = document.getElementById("nombre").value.trim();
    const precioProducto = parseFloat(document.getElementById("precio").value);
    const cantidadProducto = parseInt(document.getElementById("cantidad").value);

    const producto = new Producto(nombreProducto, precioProducto);

    agregarProducto(carrito, producto, cantidadProducto);

    document.getElementById("formulario").reset();
});

//modificar para que concuerde el precio con la cantidad
