/************
Instrucciones
*************

1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”,
“restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un
mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar -
restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch

*/

let operacion = "sumar";
let numeroA = 4;
let numeroB = 3;
let resultado = "";

switch (operacion) {
    case "sumar":
        resultado = `El resultado de sumar ${numeroA} + ${numeroB} es ${numeroA + numeroB}`
        break;
        case "restar":
            resultado = `El resultado de restar ${numeroA} - ${numeroB} es ${numeroA - numeroB}`
            break;
            case "multiplicar":
                resultado = `El resultado de multiplicar ${numeroA} * ${numeroB} es ${numeroA * numeroB}`
                break;
        case "dividir":
            resultado = `El resultado de dividir ${numeroA} / ${numeroB} es ${numeroA / numeroB}`
            break;
    default:
        resultado = "Las operaciones aceptadas son: sumar - restar- multiplicar- dividir"
        break;
}


console.log(resultado);