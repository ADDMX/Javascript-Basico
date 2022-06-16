// Condicionales IF, Else, else, if

// Ejmeplo 01

if (true) {
  console.log("Hola");
}

// Ejmeplo 02

if (false) {
  console.log("Hola");
} else {
  console.log("Hola soy falso");
}

// Ejmeplo 03

var edad = 30;

if (edad === 30) {
  console.log("Hey puedes votar, sera tu primera votación");
} else if (edad > 30) {
  console.log("Puedes votar de nuevo mi amigo");
} else if (edad < 30) {
  console.log("No Puedes votar de nuevo mi amigo");
} else if ((edad = 30)) {
  console.log("Puedes aun votar");
} else {
  console.log("Aun no puedes votar");
}

// Ejmeplo 04 con parametros

var resultado = 30;

if (resultado === 30) {
  console.log("Tu resultado es igual a 30");
} else if (resultado < 30) {
  console.log("Tu resultado es menor a 30");
} else if (resultado > 30) {
  console.log("Tu resultado es mayor a 30");
} else if (resultado <= 30) {
  console.log("Tu resultado es menor o igual a 30");
} else if (resultado >= 30) {
  console.log("Tu resultado es mayor o igual a 30");
} else if (resultado == 30) {
  console.log("Tu resultado es igual de 30");
} else {
  console.log("lamentamos decirte que tu resultado fue un caso perdido");
}

// Ejmeplo 05 validacion en una sola linea

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un numero 1" : "No, soy un numero 1";
console.log(resultado);

// Piedra, papel o tijera

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar tienes 18 años");
} else if (edad > 18) {
  console.log("Eres mayor a 18 años puedes votar");
} else if (edad < 18) {
  console.log("Eres menor a 18 años no puedes votar");
} else {
  console.log("Aun no puedes votar");
}
