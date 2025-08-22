// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]; //le faltaba el punto y coma

const li = document.getElementById("lista-de-productos");//le falta el punto y coma y debe ser getElementById en lugar de Elements y Name
const $i = document.querySelector('input');//sólo hay un input
const botonDeFiltro=document.querySelector("button"); //faltaba la constante del botón

//Mostrar productos al inicio
for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto");//faltaba el punto y coma

  var ti = document.createElement("p")
  ti.classList.add("titulo"); //faltaba el punto y coma
  ti.textContent = productos[i].nombre; //faltaba el punto y coma
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti);
  d.appendChild(imagen);

  li.appendChild(d); ////faltaba el punto y coma en todas
}

// displayProductos(productos)
// const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  //console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  ;//Faltaban un montón de puntos y comas