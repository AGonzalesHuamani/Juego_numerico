//variables
let limiteMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*limiteMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 5;

while ( numeroUsuario != numeroSecreto ){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${limiteMaximo} por favor:`));
    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${ intentos ==1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto ){
            alert(`El numero secreto es menor`);
        } else {
            alert(`El numero secreto es mayor`);
        }
        intentos++;

        if (intentos > maximoIntentos){
            alert(`Haz alcanzado el máximo de ${maximoIntentos} intentos`)
            break;
        }
    }
}