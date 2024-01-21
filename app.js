/*let titulo  = document.querySelector('h1');
titulo.innerHTML = 'juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Elige un numero del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0;
listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertastes el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todo los numeros posibles')

}else{


    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){

    }else{
        //Si el numero no ha sido generado en la lista generar el nuevo numero
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
        
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');

    asignarTextoElemento('p',`Elige un numero del 1 al 10 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;

}
function reiniciarJuego(){
    
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    
    //Inicializar el numero de intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();



/*
Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
console.log(listaGenerica);
*/

/*
Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos:
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

 let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python' ];
 console.log(lenguagesDeProgramacion);

*/



/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.*/
/*
 let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python' ];
 lenguagesDeProgramacion.push("Java",'Ruby','GoLang');
 console.log(lenguagesDeProgramacion);


*/
//Crea una función que muestre en la consola todos los elementos de la lista 
//"lenguagesDeProgramacion.
/*
function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

//Crea una función que muestre en la consola todos los elementos de la lista
 //"lenguagesDeProgramacion en orden inverso.

 function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();
*/
//Crea una función que calcule el promedio de los elementos en una lista de números.
/*
function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);*/

//Crea una función que muestre en la consola el número más grande y 
//el número más pequeño en una lista.
/*
function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);
*/
//Crea una función que devuelva la suma de todos los elementos en una lista.
/*
function calcularSuma(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numeros = [15, 8, 25, 5, 12];
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento
// pasado como parámetro, o -1 si no existe en la lista.
function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
*/















