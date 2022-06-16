// Ejemplo 01

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}

// Ejemplo 02

var estudiantes = [
  "Maria",
  "Sergio",
  "Rosa",
  "Daniel",
  "Rafael",
  "David",
  "Estefany",
];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
