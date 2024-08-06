/************
Instrucciones
*************

1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario
ingresa una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le
devuelva la misma palabra traducida al idioma inglés. Te recomendamos usar la
estructura switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario
un mensaje que le informe que “La palabra ingresada es incorrecta”.
*/

let palabra = "vela";
let traduccion = "";

switch (palabra) {
  case "perro":
    traduccion = "dog";
    break;
  case "gato":
    traduccion = "cat";
    break;
  case "puerta":
    traduccion = "door";
    break;
  case "ventana":
    traduccion = "window";
    break;
  case "mesa":
    traduccion = "table";
    break;
  default:
    traduccion = "La palabra ingresada es incorrecta";
    break;
}


console.log(traduccion);