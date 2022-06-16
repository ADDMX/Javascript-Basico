// Switch

var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy un uno");
    break;
  case 2:
    console.log("Soy un 10");
    break;
  case 100:
    console.log("Soy un 100");
  default:
    console.log("no soy ningun numero");
}

// Switch 02

var papel = 1;
var tijeras = 2;
var piedra = 3;

var user = 1;
var server = 2;

switch (true) {
  case 1:
    console.log("Gano usuario con" + op01);
    break;
  case 2:
    console.log("La maquina gano con" + op02);
    break;
  default:
    console.log("Fue un empate");
}

// Switch 03

var op1 = "piedra";
var op2 = "papel";
var op3 = "tijeras";

var juego = 1;

switch (juego) {
  case 1:
    console.log("El jugador gano con " + op1);
    break;
  case 2:
    console.log("La maquina gano con " + op1);
    break;
  case 3:
    console.log("El jugador gano con " + op2);
    break;
  case 4:
    console.log("La maquina gano con " + op2);
    break;
  case 5:
    console.log("El jugador gano con " + op3);
    break;
  case 6:
    console.log("La maquina gano con " + op3);
    break;
  default:
    console.log("Perdiste intenta de nuevo");
}

var numero = 1;

switch (numero) {
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sabado");
    break;
  case 7:
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("Es el fin de los dias");
}

function jugar(p, pc) {
  switch (p) {
    case 0:
      switch (pc) {
        case 0:
          console.log("Empate");
          break;
        case 1:
          console.log("Pierdes");
          break;
        default:
          console.log("Ganas");
          break;
      }
      break;
    case 1:
      switch (pc) {
        case 0:
          console.log("Ganas");
          break;
        case 1:
          console.log("Empate");
          break;
        default:
          console.log("Pierdes");
          break;
      }
      break;
    default:
      switch (pc) {
        case 0:
          console.log("Pierdes");
          break;
        case 1:
          console.log("Ganas");
          break;
        default:
          console.log("Empate");
          break;
      }
      break;
  }
}

if (false === !true) {
  console.log(false == true);
} else {
  console.log(true === !false);
}
