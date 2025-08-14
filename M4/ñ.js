function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x,y;
x = mycar.make; // "Honda"
y = mycar.make; // "Honda"
// console.log(x);
// console.log(mycar.make); // "Honda"
// console.log(y);

myFunc(mycar);
console.log(mycar.make); // "Toyota"

var mensaje = "gana la de fuera"; 
function muestraMensaje() { 
mensaje = "gana la de dentro"; 
console.log(mensaje); 
} 
console.log(mensaje); 
// muestraMensaje(); 
console.log(mensaje);

// Modo no estricto (por defecto)
function sinStrict() {
  x = 10; // Crea una variable global sin declararla
  console.log(x);
}
sinStrict();

// Modo estricto
function conStrict() {
  "use strict";
  x = 10; // ReferenceError: x is not defined
  console.log(x);
}
conStrict();
