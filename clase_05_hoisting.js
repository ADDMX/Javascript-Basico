// hoisting con variables 2022

console.log(usuariosRegistrados);
var usuariosRegistrados = "Rafael Reyes";

// hoisting con funciones

hey();

function hey() {
  console.log("hola " + miNombre);
}

var miNombre = "Rafael";
