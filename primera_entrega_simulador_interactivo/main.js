// Declarar una variable para almacenar los productos del carrito
let carrito = [];

// Declarar una variable para alcacenar el costo total de los productos en el carrito
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito() {
  // Obtener el valor seleccionado en el menú desplegable de productos
  const producto = document.getElementById("producto").value;
  //   Obtener y convertir a número entero el valor del campo de cantidad
  const cantidad = parseInt(document.getElementById("cantidad").value);

  //   Declarar una variable para almacenar el precio del producto seleccionado
  let precioProducto = 0;
  if (producto === "pizza") {
    precioProducto = 6000;
  } else if (producto === "hamburguesa") {
    precioProducto = 8500;
  } else if (producto === "bebida") {
    precioProducto = 1000;
  }

  //   Calcular el precio total del producto multiplicando su precio por la cantidad
  const precioTotal = precioProducto * cantidad;

  //   Crear un objeto con los detalles del producto
  const item = {
    producto: producto,
    cantidad: cantidad,
    precioTotal: precioTotal,
  };

  //   Agregar el objeto del producto al array del carrito
  carrito.push(item);
  //   Sumar el precio total del producto al total general
  total += precioTotal;
  //   Actualizar la visualización del carrito
  actualizarCarrito();
}

// Función para actualizar la visualización del carrito en el HTML
function actualizarCarrito() {
  // Obtener el elemento de la lista del carrito en el HTML
  const listaCarrito = document.getElementById("listaCarrito");
  //   Vaciar la lista actual
  listaCarrito.innerHTML = "";

  //   Iterar sobre cada elemento en el array del carrito
  for (let i = 0; i < carrito.length; i++) {
    const item = carrito[i];
    // Crear un nuevo elemento de lista
    const li = document.createElement("li");
    // Establecer el elemento de lista con los detalles del producto
    li.innerText = `${item.cantidad} x ${item.producto} - $${item.precioTotal}`;
    // Agregar el elemento de lista a la lista del carrito en el HTML
    listaCarrito.appendChild(li);
  }

  //   Actualizar el total en el HTML

  document.getElementById("total").innerText = total;
}

// Función para realizar el pedido
function realizarPedido() {
  // Verificar si el carrito está vacío
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    // Mostrar un alerta indicando que el pedido fue realizado con éxito
    alert("Pedido realizado con éxito!");
    // Vacial el array del carrito
    carrito = [];
    // Reiniciar el total a 0
    total = 0;
    // Actualizar la visualización del carrito
    actualizarCarrito();
  }
}
