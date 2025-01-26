let numeroSecreto = generarNumeroSecreto();
let cantidadDeIntentos = 1;
console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto ){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value) ;
        
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${cantidadDeIntentos} ${ cantidadDeIntentos === 1 ? 'vez' : 'veces' } ` );    
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor' );    
        }else {
            asignarTextoElemento('p', 'El número es mayor' ); 
        }
        cantidadDeIntentos++
    }
    return;
};

function generarNumeroSecreto (){
    return Math.floor(Math.random() * 10) + 1;
    
}

asignarTextoElemento('h1', 'Juego del número secreto' );
asignarTextoElemento ('p', 'Elige un número del 1 al 10');

