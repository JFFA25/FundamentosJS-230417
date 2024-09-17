// Ejercicio 03 - Tipos de datos , String , Big , Init Y Sym
// String o Cadenas de Texto
//Unifed
const alumno = "Paco"
let producto = "Monitor 20 pulgadas"

const numero6 = "30"
const numero2 = 30

console.log(typeof numero6)
console.log(typeof numero2)

//const numeroGrande = BigInt(1000000000)
//console.log(typeof numeroGrande)

const numero = 10
const numero3 = 20
//console.log(numero = Number(numeroGrande))

const numero1 = "30"
const numero4 = 30
console.log(typeof String(numero))
console.log(typeof Number(numero2))

const primerSymbol = Symbol (30)
const segundoSymbol = Symbol(30)
console.log (primerSymbol === segundoSymbol)
console.log(primerSymbol.valueOf())


// NULL
const descuento = null
console.log(typeof descuento)

// Objetos
const nombre = "Tablet"
const precio = 300
const disponible = true

const producto2 = {
    nombre: "Tablet",
    precio : 300,
    disponible: true
}
console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(precio.nombre)
console.log(disponible.nombre)

// Destructing

const { nombre2,precio2,disponible2} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Objeto Literal Enhacment

const autenticado = true
const usuario = "Paco"
const  nuevoObjeto ={
    autenticado : autenticado,
    usuario: usuario
}
console.table(nuevoObjeto)