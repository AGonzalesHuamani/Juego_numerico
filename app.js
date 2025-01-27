let numeroSecreto = 0;
let cantidadDeIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximoDeIntentosJuego = 5;

// console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${cantidadDeIntentos} ${
        cantidadDeIntentos === 1 ? "vez" : "veces"
      } `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número es menor");
    } else {
      asignarTextoElemento("p", "El número es mayor");
    }
    cantidadDeIntentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

//   console.log(numeroGenerado);
//   console.log(listaNumerosSorteados);

  //si ya llego al maximoDeIntentosJuego
  if (listaNumerosSorteados.length >= maximoDeIntentosJuego) {
    asignarTextoElemento("p", "Has agotado los intentos en esta partida");
  } else {
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length === numeroMaximo) {
      asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    } else {
      //Si el numero generado esta en la lista
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
      } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Elige un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  cantidadDeIntentos = 1;
}

function reiniciarJuego() {
  //limpiar el input (caja)
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar nuevo numero secreto
  // inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
