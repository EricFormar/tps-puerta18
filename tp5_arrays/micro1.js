/************
Instrucciones
*************
1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js). Vamos a
afianzar nuestros conocimientos sobre arrays y strings realizando diferentes acciones
sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
diferentes a los esperados.
2. Define un array que contenga un conjunto de seis (6) productos de
electrodomésticos.
3. Ejecutar sobre el array creado las siguientes acciones:
● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por
la consola los resultados.
● Extraer el primer elemento del array y agregarlo al final del mismo.
● Agregar al final del array dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el array.
● Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.
● Unificar todos los elementos del array en una cadena de texto (string), separando los
elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.
● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados
por una coma.
*/

let productosElectronicos = ["televisor","lavarropas","secarropas","heladera","playstation","plancha"];

// ● Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let indice = random(0,5);
console.log(productosElectronicos[indice]);

// ● Extraer el primer elemento del array y agregarlo al final del mismo.
let primerElemento = productosElectronicos.shift();
productosElectronicos.push(primerElemento);
console.log(productosElectronicos);

// ● Agregar al final del array dos (2) nuevos productos.
productosElectronicos.push("licuadora","tostadora");

// ● Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(productosElectronicos);

// ● Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. 
// De existir, se le debe mostrar el mensaje: “Producto encontrado”. 
// En el caso contrario mostrar el mensaje “El producto buscado no existe”.

function buscarProducto(producto, arrayProductos = []) {
    return arrayProductos.includes(producto) ? "Producto encontrado" : "El producto buscado no existe";
}
console.log("televisor => ", buscarProducto("televisor",productosElectronicos));
console.log("radio => ", buscarProducto("radio",productosElectronicos));

// ● Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
let productos = productosElectronicos.join(" ");
console.log(productos);

//● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
let cantidadElementos = productos.split(" ").length
console.log(cantidadElementos);

//● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
let productosCorrejidos = productos.replace("televisor", "smartTV");
console.log(productosCorrejidos);

//● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. 
let nuevoArrayProductos = productosCorrejidos.split(" ");
console.log(nuevoArrayProductos);

