//var, variables globales
var saludo = "Hola Jorge"
if (saludo) {
    var saludo = "Hola"
    console.log(saludo)
}
console.log(saludo)
//let, variables limitadas al alcance del bloque donde las definimos
let nombre = "Jorge"
if (nombre) {
    let nombre = "Yelena"
    console.log(nombre)
}
console.log(nombre)
//const, variables inmutables
const PI = 3.14
console.log(PI)