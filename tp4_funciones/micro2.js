/* 
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. El teach leader de la empresa nos pide construir un sistema para un local de
venta de comida rápida. Los clientes eligen el tipo de hamburguesa base con un
precio base y, por cada selección que el cliente agregue, se le suma el valor de su
selección al precio.

Por ejemplo, si partiendo de una hamburguesa base carne a la parrilla con un precio “a”,
el cliente les incorpora los adicionales: de queso “b” y tomate “c”, el total a pagar sería
a+b+c. Así sucesivamente con el resto de los ingredientes.

Es importante tener presente que cada uno de estos adicionales estarán representados por
valores booleanos, es decir, true o false, dependiendo de si aceptan o no cada uno de los
adicionales. Así recibiremos un total de ocho valores booleanos, uno por cada adicional.

Tu responsabilidad será la de crear dos funciones:
Primera función - Callback:
● Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base a un
total de nueve parámetros que recibirá la función:
● Un string para el tipo de hamburguesa, teniendo en cuenta las siguientes:
○ Carne a la parrilla: $1800
○ Pollo: $1500
○ Vegetariana: $1200
● Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los
siguientes:
○ Jamón = $30
○ Queso = $25
○ Salsa de tomate = $5
○ Mayonesa = $5
○ Mostaza = $5
○ Tomate = $15
○ Lechuga = $10
○ Cebolla = $10

Segunda función:
● Esta función tendrá la responsabilidad de devolver un mensaje al usuario
donde le indique su nombre, su apellido y el total a pagar en base al tipo de
hamburguesa seleccionado más los adicionales indicados. Tenga en cuenta
que esta función deberá recibir como parámetros: “nombre del usuario”, “apellido
del usuario”, “tipo de hamburguesa” y los ocho valores booleanos en función a los
adicionales que el cliente haya seleccionado.

Una vez creado el programa, ejecutalo. Para probar las diferentes respuestas, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides usar el console.log() para
mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
Estimado Daniel Fuentes, el monto total a pagar es de: $1905
*/

function calcularPago(
  tipoHamburguesa,
  jamon,
  queso,
  salsaTomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  let valorHamburguesa =
    tipoHamburguesa === "Carne a la parrilla"
      ? 1800
      : tipoHamburguesa === "Pollo"
      ? 1500
      : 1200;
  let valorAgregado = 0;

  valorAgregado = jamon ? valorAgregado + 30 : valorAgregado;
  valorAgregado = queso ? valorAgregado + 25 : valorAgregado;
  valorAgregado = salsaTomate ? valorAgregado + 5 : valorAgregado;
  valorAgregado = mayonesa ? valorAgregado + 5 : valorAgregado;
  valorAgregado = mostaza ? valorAgregado + 5 : valorAgregado;
  valorAgregado = tomate ? valorAgregado + 15 : valorAgregado;
  valorAgregado = lechuga ? valorAgregado + 10 : valorAgregado;
  valorAgregado = cebolla ? valorAgregado + 10 : valorAgregado;

  return valorHamburguesa + valorAgregado;
}

function generarTicket(
  nombre,
  apellido,
  tipoHamburguesa,
  jamon,
  queso,
  salsaTomate,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  return `Estimado/a ${nombre} ${apellido}, el monto total a pagar es de: $1${calcularPago(
    tipoHamburguesa,
    jamon,
    queso,
    salsaTomate,
    mayonesa,
    mostaza,
    tomate,
    lechuga,
    cebolla
  )}`;
}

console.log(generarTicket("Jorge", "Moreno", "Carne a la parrilla", true,true, true, true, true, true, true,true));
console.log(generarTicket("Mariano", "Moreno", "Pollo", true,true, true, true, true, true, true,true));
console.log(generarTicket("Marta", "Moreno", "Vegetariana", true,true, true, true, true, true, true,true));
