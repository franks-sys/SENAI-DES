console.log("----------------");
var nome ="Rogério"; 
console.log("Olá, "+ nome + "!");


console.log("----------------");
var a = 20;
var b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


console.log("----------------");
var altura = 10;
var largura = 20;
var area = altura*largura
console.log("A área do retângulo é:" + area);


console.log("----------------");
var nascimento = 2019;
var idade = nascimento - 2025;
if(idade >= 18) {
    console.log("Voce é maior de idade");
}else {
    console.log("Voce é menor de idade");
}    


console.log("----------------");
var numero = 10;
if(numero % 2 == 0) {
    console.log("O numero é par");
}else {
    console.log("O Numero é impar");
}    


console.log("----------------");
var n1 = 0;
var n2 = 9;
var n3 = 8;
var ma = (n1+n2+n3)/3;
if(ma >= 9) {
    console.log("A");
}else if( ma >= 8){
    console.log("B");
}else if( ma >= 5 && ma < 8) {
    console.log("C");
}else{
    console.log("Reprovado");
}

console.log("----------------");
for(let i = 1; i <= 200; i++) {
    if (i % 2 == 0){
        	console.log(i);
        }
}


console.log("----------------"); 
var num = 5;
var fat = 1;
for(let i = 1; i <= num; i++){
    fat *= i;

}
console.log("Fatorial de, ", num, "é", fat);

console.log("----------------"); 
for(let i = 0; i <= 1000; i += 3) {
    console.log(i);
}
