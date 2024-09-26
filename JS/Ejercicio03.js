//Objetos
const producto=
{
    Nombre:"Tablet 9\"",
    Marca : "Mac",
    Modelo: "iPad",
    Costo_Compra:11500.25,
    Costo_Venta:15400,
    Disponible: true,
    SKU: Symbol("Linkin Park"),
    Colores : ["Blanco","Negro","Rosa","Azul"] 
}
//Imprimir el objeto
console.warn("---Objetos---")
console.log(producto);
//Los objetos tambien ya pueden representarse en formato de tabla utilizando la funcion console.log.table
console.table(producto);
//Acceder a las propiedades de un objeto
console.warn("---Leyendo las Propiedades de un Objeto y sus tipos de dato")
console.log(`Nombre del producto${producto.Nombre} que es del tipo de dato ${typeof(producto.Nombre)}`);
console.log(`Nombre de la marca es ${producto.Marca} que es del tipo de dato ${typeof(producto.Marca)}`);
console.log(`El modelo del producto es${producto.Modelo} que es del tipo de dato ${typeof(producto.Modelo)}`);
console.log(`El precio del producto es${producto.Costo_Compra} que es del tipo de dato ${typeof(producto.Costo_Compra)}`);
console.log(`El costo del producto es${producto.Costo_Compra} que es del tipo de dato ${typeof(producto.Costo_Venta)}`);
//Objetos 2.0

const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");


//VARIABLES INDEPENDIENTES

console.log("%c1.- Variables Independientes", style_console);

// Declaramos valores independientes relacionadas a un PRODUCTO

let Producto_Nombre = "VAIO-230417\"";
let Producto_Marca= "Vaio"
let Producto_Modelo= "SONY"
let Producto_Precio= 15749.50;
let Producto_Disponibilidad= true;
let Producto_SKU= Symbol("TUF707VV-HX221W") 
let Producto_Stock = 15;
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias= ["Electrónicos", "Computación", "Gamming", "Promociones Buen Fin", "Mejor Valorados"];

// Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:  ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>   
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}>`);
    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));


// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);

let Producto = 
{
    ID : 230417,
    Nombre : "Tenis", 
    Marca: "Pumba",
    Modelo: "Pumbachus'01", 
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: "../assets/products/sneakers/JORDAN.png",
    Barcode:null,
    Categorias: ["Deportes", "Juvenil"]
}

// Ahora leemos el objeto completo

console.table(Producto)

// Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{   
    Clave: 316,
    Nombre : "Lentes Facheros", 
    Marca: "Teamfortres2",
    Modelo: "Scout Summer", 
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "OO9481D-0356",
    Imagen: "../assets/products/sunglasses/KatoRed.png",
    Barcode:  888392491626,
    Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
}


let Comprador =
{
    Clave: 3216,
    Nombre: "Jose Francisco",
    Apellidos: "Flores Amador",
    Tipo: "Frecuente",
    Correo: "230417@utxicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 14000.00
}

let Pedido= {
    ID: 230418,
    Producto_Clave: 316, 
    Comprador_Clave: 3216,
    Cantidad: 2, 
    Estatus: "Carrito de Compra"
}
// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente")



//console.warn("Práctica 05: Repaso de Objetos en JavaScript");
//Actualizar el valor de los objetos
console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

console.log(`El objeto tiene los siguientes valores:`)
console.log(JSON.stringify(Producto2,null,2));
//convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)

//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad
Producto2.Precio=6915.50;
console.log(`Los nuevos valores del Producto son:`)
console.log(Producto2); 

// ¿Puedo cambiar no solo el valor sino el tipo de dato de un objeto en JS?

console.log(`-----------------------------------------------------------------------------------`)
console.log(`El objeto actualmente tiene los siguientes valores`)
var tipoDisponibilidad= typeof(Producto2.Disponibilidad)
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`)
console.log(JSON.stringify(Producto2,null,2)); //Disponibilidad Boolean
Producto2.Disponibilidad="Sí";
let nuevoTipoDisponible= typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponible}`)
//Si
//

//Agregacion de propiedades a un objeto existente
console.log("%c5-- Agregacion de propeidades de un objeto",style_console);
//console.log("%c5.- Agregar nuevas propiedades al Objeto", style_console);
console.log("Objeto antes de ser modificado: ");
console.log(JSON.stringify(Comprador));

//Agregando propiedades
console.log("Los datos actuales del comprador son: ")
console.table(Comprador)
Comprador[`Dirección`]="Av. Benito Juárez No. 1525, Interior 40, Xicotepec de JUárez, Puebla, México"
Comprador[`Tipo`]="Nuevo Cliente"
Comprador[`ActividadReciente`]= true
Comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las propiedades; Dirección, Tipo, ActividadReciente y TotalCompras... ")
console.table(Comprador)

//Eliminar Propiedades de un objeto existente
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos a la modificación:")
console.table(Pedido)
delete Pedido.TipoPago
console.log("Despues de la modificación...")
console.table(Pedido)


console.log("%c7.- Metodos para controlar la mutabilidad de los Objetos,Congelacion(FREZE)", style_console);
//Si deseamos no permitir que los objetos sean modificados ni su estructura, ni el valor , utilizaremos el metodo FREZE(Congelar)
console.log(`La estructura actual del Objeto COMPRADOR es : `)
console.table(Comprador)
Object.freeze(Comprador);
//Internamos agregar , eliminar , modificar los valores de sus propiedades
Comprador.FechaUltimaCompra="05/09/2024"
delete Comprador.Tipo;
Comprador.Dirección="Calle Misericorida Interior #112"
console.log(`Verificamos que si se realizaron los cambios en el objeto COMPRADOR es : `)
console.table(Comprador)



console.log("%c8.- Metodos para controlar la mutabilidad de objetos sellado (SEAL)", style_console);
//Sin embargo , en el caso que debemos poder modificar los valores de las propiedades del Objeto , pero no su estructura , usaremos SEAL
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`]="24/09/2024";
delete Pedido[`Cantidad`]
console.log(`Verificamos que si se realizaron los cambios en el Objeto PEDIDO:`)
console.table(Pedido)
Pedido.Cantidad=5
console.log(`Verificamos si se realizaron los cambios en el Objeto PEDIDO:`)
console.table(Pedido)

console.log("%c9.-Destructuracion de  2 objetos", style_console);

const {} = Producto;
let{Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
let{Precio: ProductoPrecio, SKU: ProductoSKU, Marca: ProductoMarca}= Producto


if (ProductoPrecio> 2000)
    ProductoPrecio="Caro"  
else
    ProductoPrecio = "Barato"


if (clienteSaldo>0)
    clienteSaldo = "A favor"
else if (clienteSaldo < 0)
    clienteSaldo = "En contra"
else
    clienteSaldo = "Sin deuda"

let clienteNivel;

    if(clienteTipo =="Premium")
        clienteNivel=1;
    if(clienteTipo == "Fremium")
        clienteNivel =2 ;
    if(clienteNivel=="No identificado")
        clienteNivel =3;

if(clientePais == "Mexico")
    clientePais = "Nacional"
else
    clientePais="Extrangero"


let datosClientesPromociones={clienteCorreo,clientePais,clienteNivel,clienteSaldo,ProductoMarca,ProductoPrecio}

console.log("Los datos del cliente y sus habitos de compra son: ")
console.table(datosClientesPromociones)
//Operaciones sobre Objetos 

console.log("%c10- Metodo para controlar la mutabilidad de los objetos Sellado (SEAL))", style_console);

console.log("Impeimimos la estructura y valores en Objetos PRODUCTO")
 console.table(Producto);

console.log("Imprimimos la estructura y valores de Objetos PEDIDO")
 console.table(Pedido);

console.log("%c10- Union de Objetos usando el SPEAD OPERATOR (ASAY))", style_console);

console.table(Producto);
console.table(Comprador);
console.table(Pedido);

let Venta2 = { 
    producto : {... Producto },
    comprador: {... Comprador},
    pedido : {... Pedido}

}
    console.log("Fusionamps los 3 Objetos en uno nuevo sin perdida de informacion")
    console.log(Venta2)
    console.table(Venta2)

