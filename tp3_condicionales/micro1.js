/************
Instrucciones
*************

1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
2. Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes
crear una variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.

Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
● Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
● Si es un perfil“administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
● Si es un perfil“asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “Usted sólo tiene permisos de registrar, modificar y
consultar datos”.
● Si es un perfil“invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
● Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”.

*/

let perfil = "INVITADO";
let mensaje = "";

switch (perfil) {
  case "administrador":
  case "ADMINISTRADOR":
  case "Administrador":
    mensaje = "Usted tiene todos los privilegios de uso del sistema";
    break;
  case "asistente":
  case "ASISTENTE":
  case "Asistente":
    mensaje =
      "Usted sólo tiene permisos de registrar, modificar y consultar datos";
    break;
  case "invitado":
  case "INVITADO":
  case "Invitado":
    mensaje = "Usted sólo tiene permisos de consultar datos";
    break;
  default:
    mensaje = "Debe especificar un perfil válido";
    break;
}

console.log(mensaje);
