//DEFINICIONES
//--------------------------------------------------------------------------
//var -> Variables globales
//let -> Variables limitadas al alcance del bloque donde las definimos
//const -> Variables inmutables
//--------------------------------------------------------------------------
var saludo = "Hola Mario"
if (saludo) {
    var saludo = "Hola"
    console.log(saludo)
}
console.log(saludo)

let nombre = "Mario"
if (nombre) {
    let nombre = "Zenaku"
    console.log(nombre)
}
console.log(nombre)

const PI = 3.1416
console.log(PI)