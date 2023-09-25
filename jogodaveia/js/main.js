// declaração de variáveis
// var numero = 1;
// var decimal = 1.5;
// var texto '';

let nome = '';
const pi = 3.14;

 //imprimir na tela
 // console.log(nome);
// console.log("Hoje não")

// Declarar uma variável para representar os elementos dp jogo
let letra = 'X'; // X ou O

function joga(casa) {
    let celulaClicada = document.getElementById(casa).innerHTML;

    if(celulaClicada == 'X' || celulaClicada == '0') {
        alert('Esta casa já esta ocupada');
    } else {
        document.getElementById(casa).innerHTML = letra;
        if(letra == 'X') {
            letra == 'O';
        } else {
            letra ='X';
        }
    }
}

