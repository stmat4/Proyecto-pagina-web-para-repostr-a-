let carrito = [];
let total = 0;

realizarPago();

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

  const totalSpan = document.getElementById("total");
  totalSpan.textContent = total.toFixed(2);
}

function realizarPago() {
  if (carrito.length === 0) {
    ("El carrito esta vacio. Agrega productos antes de realizar el pago.");
    return;
  }

  const metodoPago = prompt("Digite 1 para pago con tarjeta de credito o 2 para pago por SinpMovil");
  if (metodoPago === "1") {
    const tarjetaCredito = prompt("Ingrese el numero de tarjeta de credito:");
    if (tarjetaCredito) {
      alert(`Pago realizado exitosamente con tarjeta de credito. Total: $${total.toFixed(2)}`);
      alert("Enviar comprobante de pago a +(506)8911-7854 por WhatsApp");
    } else {
      alert("Numero de tarjeta de crédito invalido. Pago no realizado.");
    }
  } else if (metodoPago === "2") {
    const sinpe = prompt("Ingrese su correo para enviar su recibo:");
    if (sinpe) {
      alert(`Pago realizado exitosamente por Sinpe. Total: $${total.toFixed(2)}`);
      alert("Enviar comprobante de pago a +(506)8911-7854 por WhatsApp");
      
      carrito = [];
      total = 0;
      actualizarCarrito();
    } else {
      alert("Correo invalido. Pago no realizado.");
    }
  } else {
    alert("Método de pago no valido. Pago no realizado.");
  }
}