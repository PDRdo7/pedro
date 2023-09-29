//calculadora de idade
function idade(){
let anoDeNascimento = parseInt(prompt("em que ano voce nasceu?"));
let idade = 2023 - anoDeNascimento
alert(" quem nasceu em " + anoDeNascimento + " vai fzer " + idade + " em 2023 ");
}
function nota(){
let nota1 = parseFloat(prompt("digite a nota do primeiro trimestre: "));
console.log (nota1)
let nota2 = parseFloat(prompt("digite a nota do segundo trimestre: "));
console.log (nota2)
let nota3 = parseFloat(prompt("digite a nota do terceiro trimestre: "));
console.log (nota3)

let resultado = nota1 + nota2 + nota3;
console.log(resultado)

if(resultado >=180){
    alert("resultado final" + resultado + "pasosou")
}
else{
    alert("nota necessaria 180, " + resultado + "reprovou burro")
}
}