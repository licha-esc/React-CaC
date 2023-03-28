function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  // let numero = Number(prompt("ingrese numero"));
/*   if (x > y) {
    return x;
  } else if (x < y) {
    return y;
  } else {
    return x || y;
  } */

  return x > y ? x : y;
}
console.log(obtenerMayor(2, 3));
console.log(obtenerMayor(31, 24));
console.log(obtenerMayor(5, 5));


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"

  // let años = Number(prompt("¿edad?"));

  return edad >= 18 ? "Pasá crack" : "No pasas master, andá al matine";
}
console.log(mayoriaDeEdad(12));



function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

/*   if(status == 1) {
    return "Online";
  } else if(status == 2) {
    return "Away";
  } else {
    return "Offline";
  } */

  switch(status) {
    case 1:
      return "Online";
    case 2:
      return "Away";
    case 3:
      return "Offline";
  }
}
console.log(conection(1));



function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
    case "mandarin":
      return "Ni Hao!";
    case "ingles":
      return "Hello!";
    default:
      return "Hola!";
  }

}
console.log(saludo("aleman"));
console.log(saludo("mandarin"));
console.log(saludo("ingles"));
console.log(saludo("otro"));



function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }

}
console.log(colors("green"));




function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  return numero == 10 || numero == 5 ? true : false;
}
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(123));



function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero <= 50 && numero >= 20 ? true : false;
}
console.log(estaEnRango(19));
console.log(estaEnRango(20));
console.log(estaEnRango(51));



function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return numero === Math.floor(numero);
}
console.log(esEntero(0.8));
console.log(esEntero(1));
console.log(esEntero(-10));

/* 
function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else {
    return numero;
  }
}
console.log(fizzBuzz(15)); */


function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
/*   if (numero % 3 === 0 && numero % 5 === 0) {
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    return "fizz";
  } else if (numero % 5 === 0) {
    // Si "numero" es divisible entre 5, devuelve "buzz"
    return "buzz";
  } else {
    // De lo contrario, devuelve el número
    return numero;
  } */

// con operador ternario 
return (numero % 3 === 0 && numero % 5 === 0) ? "fizzbuzz" : (numero % 3 === 0) ? "fizz" : (numero % 5 === 0) ? "buzz" : false;
}
console.log(fizzBuzz(9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(17));
console.log(fizzBuzz(15));




function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  return (num1 === 0 || num2 === 0 || num3 === 0) ? "Error" :
  (num1 < 0 || num2 < 0 || num3 < 0) ? "Hay negativos" :
  (num1 > num2 && num1 > num3 && num1 > 0) ? "Número 1 es mayor y positivo" :
  (num3 > num1 && num3 > num2) ? num3 + 1 : false;
}
console.log(operadoresLogicos(2,5,4)); 
console.log(operadoresLogicos(2,3,5));
console.log(operadoresLogicos(2,3,-5));
console.log(operadoresLogicos(6,3,5));



function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if(numero < 2) { // si el número es menor que 2, no es primo (0 y 1 no se consideran primos)
    return false; // devuelve false y termina la ejecución de la función
  }
  for(var i = 2; i <= numero/2; i++) { // iteramos desde 2 hasta la mitad del número (ningún número primo puede ser divisible por un número mayor que su mitad)
    if(numero % i === 0) { // si el número es divisible por el número actual del bucle, no es primo
      return false; // devuelve false y termina la ejecución de la función
    }
  }
  return true; // si la función no ha devuelto false todavía, el número es primo, así que devuelve true
}
console.log(esPrimo(3));



function esPrimo2(numero) {
  if(numero < 2) return false;
  for(let i = 2; i <= numero/2; i++) {
    if(numero % i === 0) return false;
  }
  return true;
}
console.log(esPrimo2(4));





function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
/*   if (valor == true) {
    return "Soy verdadero";
  } else if (valor == false) {
    return "Soy falso";
  } */

  return valor === true ? "Soy verdadero" : "Soy falso";
}
console.log(esVerdadero(true));



function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  
    let tabla = []; // creamos un array vacío para almacenar los resultados de la tabla de multiplicar
    for(let i = 0; i <= 10; i++) { // iteramos de 0 a 10 para obtener los resultados del 0 al 60
      tabla.push(i * 6); // multiplicamos el número actual del bucle (i) por 6 y lo agregamos al array "tabla"
    }
    return tabla; // devolvemos el array con los resultados de la tabla de multiplicar
    
}
console.log(tablaDelSeis());



function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
  return numero >= 100 && numero <= 999;
}
console.log(tieneTresDigitos(10));
console.log(tieneTresDigitos(100));
console.log(tieneTresDigitos(1000));



function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let iteraciones = 0;
    do {
      numero += 5; // aumentamos el número recibido en 5
      iteraciones++;
    } while (iteraciones < 8 && numero <= 40); // repetimos el bucle mientras el número de iteraciones sea menor a 8 y el número resultante no supere 40
    return numero; // devolvemos el número final
}
console.log(doWhile(3));