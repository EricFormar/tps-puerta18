/************
Instrucciones
*************
Si llegaste hasta acá, estás avanzando muy bien. ¡Felicitaciones!

Si querés seguir practicando, te proponemos este otro ejercicio. Ten en cuenta que este
ejercicio puede escalar en dificultad.

Paciencia, trata de resolverlo con las herramientas que tengas a tu disposición. Te
recomendamos que busques información extra en Google o documentaciones que conozcas.

1. En la carpeta ya creada, crear un nuevo archivo JavaScript (.js).
2. Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el
aterrizaje o no. Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta
que:

a. La velocidad debe estar comprendida entre 268 a 278 km/hr.
b. La altura debe estar comprendida entre 150 m a 300 m.
*/

let velocidad = 270;
let altura = 220;

let estaListo = (velocidad >= 268 && velocidad <= 278) && (altura <= 300 && altura >= 150);


console.log(estaListo);