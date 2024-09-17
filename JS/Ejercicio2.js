console.warn("--- Tipo de dato UNDEFINED");
let Cliente;

console.log(`El cliente es: ${Cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(Cliente)}`);

Cliente = "Juan Mecanico";

console.log(`El cliente es: ${Cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(Cliente)}`);

Cliente = "123";

console.log(`El cliente es: ${Cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(Cliente)}`);

//Undefined es el tipo de dato que por defecto se asigna a variables no inicializada o no declarada

console.warn("---Tipo de dato: BOOLEAN (True or False)");

let Premium = "No lo se";
console.log(`¿El cliente es premium.?, ${Premium}`);

console.log(`El tipo de dato de la variable Premium es ${typeof(Premium)}`);

Premium = true;
console.log(`El tipo de dato de la variable Premium es ${typeof(Premium)}`);
console.log(`¿El cliente es premium.?, ${Premium}`);
console.log("Cambiando el valor de Premium a false");
Premium = false;

    if(Premium)
        console.log("El cliente pago por usar el servicio");
    else{
        console.log("El cliente no pago por usar el servicio");
    }

 var cantidad;
 const costo_producto = 10.50;
 let saldo_cuenta = 2048.98;
 let monto_transaccion;
 
 console.warn("---Tipo de dato: NUMBER (Numeros, positivos, negativos, decimas, flotantes)");
 console.log(`Tu saldo el dia de hoy es de: ${saldo_cuenta}, (tipo de dato = ${typeof(saldo_cuenta)})`);
 console.log(`El producto que has seleccionado cuesta: ${costo_producto}`);

 cantidad = 8;
 console.log(`Has elegido comprar: ${cantidad} de producto`);
 console.log(`El importe total de la compra es de: ${costo_producto}`);
 saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);


console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//El cliente realiza un abono de 1500
monto_transaccion = 1500;
console.log(`Tu abono de ${monto_transaccion} ha sido recibido, tu nuevo saldo es de ${saldo_cuenta + monto_transaccion}`);