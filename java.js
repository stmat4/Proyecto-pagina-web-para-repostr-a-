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
    ("El carrito está vacío. Agrega productos antes de realizar el pago.");
    return;
  }

  const metodoPago = prompt("Digite 1 para pago con tarjeta de crédito o 2 para pago por Sinpe");
  if (metodoPago === "1") {
    const tarjetaCredito = prompt("Ingrese el número de tarjeta de crédito:");
    if (tarjetaCredito) {
      alert(`Pago realizado exitosamente con tarjeta de crédito. Total: $${total.toFixed(2)}`);
      alert("Enviar comprobante de pago a +(506)8911-7854 por WhatsApp");
    } else {
      alert("Número de tarjeta de crédito inválido. Pago no realizado.");
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
      alert("Correo inválido. Pago no realizado.");
    }
  } else {
    alert("Método de pago no válido. Pago no realizado.");
  }
}