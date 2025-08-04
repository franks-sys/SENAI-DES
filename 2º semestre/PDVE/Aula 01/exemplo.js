//var -  escopo global
// let - escopo global
// const - escopo golbal e valor não altera

var nome ="Fulano"; // string
var idade = 50.5;
var habilitado = true;
const nascimento = 1875;

console.log(habilitado); // Imprime no terminal

console.log(typeof(habilitado)); // typeof retorna ao tipo da variável

/*
    soma +
    subtração -
    divisão / 
    multiplicação *
    modulo %
*/

var a = "10";
var b = 10;

console.log(a+b);
/*
    Igaualdade ==
    Diferente =!
    Estritamente igual ===
    Estritamente diferente !==
    Maior >
    Maior Igual >=
    Menor <
    Menor igual <=
*/
if(a == b) {
    console.log("São iguais");
}else {
    console.log("São diferentes");
}    

switch(b) {
    case 1:
        break;
    case 1:
        break;     
    default:
        break;
        
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

while (a < 10){
    if ( a ==5 ) {
        break;
    }
}

do {


} while (a < 10)