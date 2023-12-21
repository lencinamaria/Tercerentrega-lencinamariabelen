
const Producto = function(nombre,tipo,precio){
    this.nombre= nombre
    this.tipo= tipo
    this.precio= precio
}

let producto1 = new Producto ("cortinas","Lienzo",12000)
let producto2 = new Producto ("cortinas","voile",15000)
let producto3 = new Producto ("cortinas","gasa",12000)
let producto4 = new Producto ("Almohadon","pana",6000)
let producto5 = new Producto ("almohadon","gabardina",15000)
let producto6 = new Producto ("mantel","tussor",12000)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

if(localStorage.getItem("productos")){
    lista= Json.parse(localStorage.getItem("productos"))
}else{
    lista=lista
}

function filtrarProductos(){
    const body =document.querySelector("body")
    const input= document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){

        const container= document.createElement("div")

        resultado.forEach( (producto)=>{
            const card = document.createElement("div")

        const nombre = document.createElement("h3") 
        nombre.textContent= producto.nombre
        card.appendChild(nombre)

        const tipo = document.createElement("p") 
        tipo.textContent= producto.tipo
        card.appendChild(tipo)

        const precio = document.createElement("p") 
        precio.textContent= producto.precio
        card.appendChild(precio)

        container.appendChild(card)

        })

        body.appendChild(container)
    }else{
        alert("No hay coincidencias")
    }
}   


const filtrarBoton = document.getElementById("filtrar")
filtrarBoton.addEventListener("click", filtrarProductos)

function mostrarProductos() {
    const container = document.getElementById('productos-container');
    container.innerHTML = '';

    lista.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);

        const tipo = document.createElement('p');
        tipo.textContent = producto.tipo;
        card.appendChild(tipo);

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio}`;
        card.appendChild(precio);

        container.appendChild(card);
    });
}

const botonVertodo = document.getElementById("vertodo")
botonVertodo.addEventListener("click", mostrarProductos)