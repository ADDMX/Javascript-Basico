// funciones

// funciones declarativas

function miFuncion() {
  return 3;
}

miFuncion();

function rafael() {
  edad: 30;
}

rafael();

// funciones de expresion

var miFuncion = function (a, b) {
  return a + b;
};

// Ejemplos de funciones declarativas

function saludarEstudiantes(estudiante) {
  console.log(`Hola ${estudiante}`);
}

function saludarempleados02(empleado) {
  console.log(`Bienvenido de nuevo: ${empleado}`);
}

function usuarios(user) {
  console.log(`Bienvenidos a su nuevo GYM: ${user}`);
}

function sumar(a, b) {
  var operacion = a + b;
  return operacion;
}

sumar(1, 2);

// Ejemplo dos

var nombres = "Rafael Ivan Reyes Vázquez";

function saludarinvitados(nombres) {
  console.log("Bienvenido " + nombres);
}

saludarinvitados(nombres);
