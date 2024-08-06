/************
Instrucciones
*************

1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones
aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
numéricos que consideres. Ejemplo: let numero1 = 16;
3. Usando el console.log() mostrar al usuario los resultados de las siguientes operaciones
aritméticas, en función de los valores asignados a las variables:
a. suma
b. resta
c. multiplicación
d. división
e. módulo
4. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true. De
lo contrario mostrará false
5. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true. De
lo contrario mostrará false

*/

let numero1 = 10;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;
let esMayor = numero1 > numero2;
let esMenor = numero1 < numero2;

console.log("numero1: ", numero1);
console.log("numero2: ", numero2);
console.log("suma:", suma);
console.log("resta: ", resta);
console.log("multiplicación: ", multiplicacion);
console.log("división: ", division);
console.log("módulo", modulo);
console.log(numero1 + " es mayor que " + numero2, esMayor);
console.log(numero1 + " es menor que " + numero2, esMenor);