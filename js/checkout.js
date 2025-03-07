const nombresInput = document.querySelector("#nombres-input")
const apellidosInput = document.querySelector("#apellidos-input")
const emailInput = document.querySelector("#email-input")
const celularInput = document.querySelector("#celular-input")
const direccionInput = document.querySelector("#direccion-input")
const direccion2Input = document.querySelector("#direccion-2-input")
const aditionalNote = document.querySelector("#additiona-note")
const btnPagar = document.querySelector(".btn-checkout")
const productosCheckout = document.querySelector(".productosCheckout")
const valorDomicilio = document.querySelector(".valor-domi")
const ciudadDomicilio = document.querySelector(".destino")
const descuento = document.querySelector(".promo")
const subtotal = document.querySelector(".res-sub-total")
const total = document.querySelector(".total")
const opcion = document.querySelectorAll(".form-check-input")
document.addEventListener("DOMContentLoaded", () => {
    mostrarDatos()
})

btnPagar.addEventListener("click", () => {
    if (!nombresInput.value) {
        alert("Debes escribir tu nombre*")
    }
    else if (!apellidosInput.value) {
        alert("Debes escribir tus apellidos*")
    }
    else if (!emailInput.value) {
        alert("Debes escribir tu email*")
    }
    else if (!celularInput.value) {
        alert("Debes escribir tu numero de celular*")
    }
    else if (!direccionInput.value) {
        alert("Debes escribir tu direccion*")
    }
    else {
        let datosCliente = {
            nombres: nombresInput.value,
            apellidos: apellidosInput.value,
            email: emailInput.value,
            celular: celularInput.value,
            direccion: direccionInput.value,
            direccion2: direccion2Input.value,
            informacionAdicional: aditionalNote.value
        }
        localStorage.setItem("cliente", JSON.stringify(datosCliente))
        alert("Compra realizada correctamente")
        location.href="thankyou.html"
    }

})

function mostrarDatos() {
    let productosYDatos = JSON.parse(localStorage.getItem("pro-resumen")) || []


    productosYDatos.productos.forEach((producto) => {
        let fila = document.createElement("div")
        fila.classList.add("d-flex", "justify-content-around")
        fila.innerHTML = `
        <p class="fs-4">${producto.nombre}</p>
        <p class="fs-4">$${producto.precio}</p>
        <p class="fs-4">${producto.cantidad}</p>
        `
        productosCheckout.appendChild(fila)
    })
let porcentajeExtraPago = 0.05
   const opcion1=document.querySelector("#cod")
   opcion1.addEventListener("click",()=>{
    porcentajeExtraPago=2
    mostrarDatos()
   })
   const opcion2=document.querySelector("#cp")
   opcion2.addEventListener("click",()=>{
    porcentajeExtraPago=3
    mostrarDatos()

   })




    valorDomicilio.textContent = productosYDatos.valorDomicilio
    ciudadDomicilio.textContent = productosYDatos.domicilio
    descuento.textContent = productosYDatos.descuento
    subtotal.textContent = productosYDatos.subtotal
    let valorTotal = (parseFloat(productosYDatos.total) + parseFloat(productosYDatos.total) * porcentajeExtraPago).toFixed(3)
    total.textContent = valorTotal

}




