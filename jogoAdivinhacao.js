var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var numeroAleatorio = Math.round(Math.random() *100);
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}
let numeroTentativas = 10;

pergunta();
function pergunta() {
    rl.question("Digite um número: ", function(numero){
        numero = parseInt(numero);
    console.log(numero)
    numeroTentativas--;
    if (numero === numeroAleatorio){
        console.log("Parabéns! Você Acertou.");
        rl.close();
        } else if (numeroTentativas === 0){
            console.log("Que pena, você não descobriu o número. Volte mais tarde!");
            rl.close();
        } else if (numero > numeroAleatorio) {
            console.log("Numero errado. Você possui " + numeroTentativas + " Tentativas." + " O Numero informado é maior que o Sorteado.");
            pergunta();
        } else if (numero < numeroAleatorio) {
            console.log("Numero Errado. Você possui " + numeroTentativas + " Tentativas." + " O Numero informado é menor que o Sorteado.");
            pergunta();
        }
    });
    
}




 