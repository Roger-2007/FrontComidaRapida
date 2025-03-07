//Variables

const btnProductos = document.querySelectorAll('.btn-product')
const contadorCarrito = document.querySelector('.contar-pro')
const listadoCarrito =  document.querySelector(".list-cart tbody")
const btnCarrito = document.querySelector(".fa-cart-shopping")

let con = 0
btnCarrito.addEventListener("click",()=>{
    const toggleForm = document.querySelector(".list-cart")
    toggleForm.classList.toggle("ocultar")

})

btnProductos.forEach((btn,i) => {
    btn.addEventListener('click',()=>{
        con++
        contadorCarrito.textContent=con
        infoProducto(i)
    })
});

function agregarProducto(producto){
    const fila = document.createElement("tr")
    fila.innerHTML=`
    <td>${con}</td>
    <td><img src="${producto.imagen}" width="70px"></td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td><span onclick="borrarProducto(${con})" class="btn btn-danger">X</span></td>
    `
    
listadoCarrito.appendChild(fila)
}

function infoProducto(i){
    let producto = btnProductos[i].parentElement.parentElement.parentElement
    console.log(producto);
 let infoProducto = {
    nombre : producto.querySelector("h3").textContent,
    imagen : producto.querySelector("img").src,
    precio : producto.querySelector("h5").textContent,

}
agregarProducto(infoProducto)
guardarProLocalStorage(infoProducto)

}

function borrarProducto(i){

let producto = event.target.parentElement.parentElement;
producto.remove()
if (con>0){
con--
contadorCarrito.textContent=con}

eliminarProLocalStorage(i)
}


function guardarProLocalStorage(producto){
let productos = JSON.parse(localStorage.getItem("productos"))||[];
productos.push(producto)

localStorage.setItem("productos",JSON.stringify(productos))
}

function eliminarProLocalStorage(i){
let productos = JSON.parse(localStorage.getItem("productos"))||[]

productos.splice(i-1,1)
localStorage.setItem("productos",JSON.stringify(productos))
}