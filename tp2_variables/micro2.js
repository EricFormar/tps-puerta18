/************
Instrucciones
*************

1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).

2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador, para
ello debes declarar las siguientes variables y almacenar en ellas los siguientes datos del
trabajador: nombre , apellido, sueldoActual, porcentajeAumento

3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100). 

4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.

5. Usando el console.log() y concatenando string, muestra en la consola de Visual Studio
Code los contenidos de cada una de las variables:

 */

let nombre = "Humberto";
let apellido = "Martinez";
let sueldoActual = 4000;
let porcentajeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("nombre: ", nombre);
console.log("apellido: ", apellido);
console.log("sueldo actual: ", sueldoActual);
console.log("porcentaje aumento: ", porcentajeAumento);
console.log("calculo aumento: ", calculoAumento);
console.log("nuevo sueldo: ", nuevoSueldo);