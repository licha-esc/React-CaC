//! sentencia while
// let numero = prompt("elige numero");

/* while (numero < 10) {
    numero++;
    document.write(numero + "<br>");
} */

//! sentencia do while
/* do {
    numero ++;
    document.write(numero);
} while (numero < 10); */

//! break
/* while (numero < 10) {
    numero++;
    document.write(numero + "<br>");
    if (numero == 5) {
        break;
    }
} */

//! bucle for
// (1-declarar variable; 2-condicion; 3-incrementamos la variable) 
/* for (let i = 0; i < 10; i++) {
    document.write(i);    
} */

//! arrays - arreglo - matriz
// indice >               0          1        2       3
const lenguajes =  ["javascript", "java", "pyhton", "PHP"];

/* console.log(lenguajes[1]); // ver el elemento por el indice
console.log(lenguajes.length); // cantidad de elementos
console.log(lenguajes[lenguajes.length-1]); // acceder al ultimo elemento 

lenguajes[2] = "C++"; // asignacion
console.log(lenguajes); */


//! metodos de array
//                 0        1         2          3         4           5          6
let animales = ["perro", "gato", "yaguarete", "yacare", "surubi", "carpincho", "perro"];
let numeros = [1, 2, 8, 7, 4, 6, 7, 3];
let bidimensional = [1, 2, 3, 4, 5, 6, [7, 8]];
let dev = "codo a codo";

//? .map
/* // recorre el array, modifica los elementos presentes en el y retorna eso en un nuevo array con la misma longitud que el original.
const nuevoArray = numeros.map(elements => elements * 10);  // declaramos una funcion flecha para que multiplique los elementos * 10.
console.log(nuevoArray); // va recorriendo todos los elementos y los va cambiando.

console.log(numeros); // numeros sigue siendo igual. */


//? .filter
/* // recorre el array y retorna un nuevo array pero solamente con los elementos que cumplan una condicion. Por ej. para un buscador.
const nuevoArray = animales.filter(elements => elements === "perro" || elements === "gato");
console.log(nuevoArray); // lo añade en orden. */


//? forEach()
/* // itera el contenido del array, recibe el callback que toma como parametro el elemento actual y en indice del mismo.
animales.forEach((element, i) => {
console.log(`el ${element} se encuentra en el indice ${i}`);
}); */


//? find()
/* // recorre el array y retorna la primer coincidencia del elemento que se busca. 
const nuevoArray = numeros.find(elements => elements > 3);
console.log(nuevoArray); // En este caso el primer elemento mayor a 3 es 8. */


//? push()
/* // añade uno o mas elementos al final de un array y retorna el mismo array con su nueva longitud.
animales.push("cocodrilo");
console.log(animales); */


//? pop()
/* // elimina el ultimo elemento de un array y retorna el mismo array con su nueva longitud.
animales.pop();
console.log(animales); */


//? shift()
/* // elimina el primer elemento del array.
animales.shift();
console.log(animales); */


//? unshift()
/* // agrega un elemento al inicio del array.
animales.unshift("cocodrilo");
console.log(animales); */


//? slice()
/* // devuelve una copia de una sección del array. Tanto para el inicio como para el final, se puede utilizar un índice negativo para indicar un desplazamiento desde el final del array.
const nuevoArray = animales.slice(0, 3);
console.log(nuevoArray);

const nuevoArray2 = animales.slice(2, 6);
console.log(nuevoArray2 ); */

