// Math
// Math.pow devuelve un num elevado a su exponente

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(3,3));

//! Métodos de redondeo:
// redondea para arriba al numero entero más cercano
console.log(Math.round(6.5));
console.log(Math.round(2.45));
console.log(Math.round(6.99));


// redondea para abajo
console.log(Math.floor(6.99));


// siempre redondea el numero entero hacia arriba
console.log(Math.ceil(6.001));
console.log(Math.ceil(6.99));


//! numeros al azar:
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 45);
console.log(Math.random() * 45);


console.log(Math.trunc(12,32));
console.log(Math.trunc(10,5));
console.log(Math.trunc(2,6) * 45);
console.log(Math.trunc(3,9) * 45);


//! length
let nombre = "Juan Perez";
console.log("Hola " + nombre + " tenes " + nombre.length + " letras ");


//! logicos / relacionales 
let num1 = 33;
let num2 = "33";
let num3 = 40;

console.log(num1==num3);
console.log(num1==num2);
console.log(num1===num2);

{/* < > <= >= */}
console.log(num1>=num2);

console.log((num1 > 40) && (num1==num2));
console.log((num1 > 40) || (num1==num2));


//! condicionales

//? if ternario

// let pelicula = "otra";

// if (pelicula === "Matrix") {
//     console.log("Peliculon");
// } else {
//     console.log("no quiero otra peli");
// }

// pelicula === "Matrix" ? console.log("Peliculon") : console.log("no quiero otra peli");


// // switch
// let semaforo = prompt("ingresa un color del semaforo");

// switch (semaforo.toLowerCase()) { // toLowerCase es para que lo pase todo a minuscula
//     case "verde":
//         console.log("Podes avanzar");
//         break;
//     case "amarillo":
//         console.log("Precaucion");
//         break;
//     case "rojo":
//         console.log("No podes pasar");
//         break;
//     default:
//         console.log("Color incorrecto");
//         break;
// }


//! funciones

// funcion sin argumentos
function saludar() {
    console.log("Hola codo a codo");
}
saludar();

// funcion con argumentos 
function sumar(num1, num2) {
    console.log(num1 + num2);
}
sumar(10, 14);
sumar(Number(prompt("decime un num")), Number(prompt("decime otro num")));

