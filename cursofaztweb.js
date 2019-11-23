document.write("<h1>Hola Mundo!</h1>");
// Declarar arreglos en javascript
var nombres = ["Ryan", "joe", "Martha"];
// Como obtener valor dentro de un arreglos.
nombres[0];
// que corresponde al primer valor del arreglo. Esto se hace con el índice que
// siempre comienza en cero.
console.log(nombres[0]);
// Para saber la longitud de un arreglo se hace de la siguiente forma:
nombres.length;
console.log(nombres.length);
// Como utilizar un ciclo for
for (var i = 0; i < nombres.length; i++) {
document.write(nombres[i]);
}
// Otra manera
for (var i = nombres.length - 1; i >= 0; i--){
  console.log(nombres[i]);
}
// Funciones
function greetings (person) {
console.log("Hello " + person);
}
greetings("Jesus");
// Para declarar una constante
const nota = 20;
