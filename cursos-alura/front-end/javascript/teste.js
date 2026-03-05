const readline = require("readline");

let acertos = 0;

const prova = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prova.question(
  //questão 1
  "1) qual palavra usamos para criar uma função?\nA) function\nB) funcao\nC) função\nRESPOSTA: ",
  (letra1) => {
    if (letra1.toLowerCase() === "a") {
      console.log("********************\nParabéns, você acertou!\n********************");
      acertos++;
    } else {
      console.log("********************\nVocê errou!\n********************");
    }

    prova.question(
      //questão 2
      "2) qual é uma estrutura de repetição?\nA) function\nB) loop\nC) repeat\nRESPOSTA: ",
      (letra2) => {
        if (letra2.toLowerCase() === "c") {
          console.log("********************\nParabéns, você acertou!\n********************");
          acertos++;
        } else {
          console.log("********************\nVocê errou!\n********************");
        }

        prova.question(
          //questão 3
          "3) qual valor é considerado falsy em javascript?\nA) 1\nB) 0\nC) 'texto'\nRESPOSTA: ",
          (letra3) => {
            if (letra3.toLowerCase() === "b") {
              console.log("********************\nParabéns, você acertou!\n********************");
              acertos++;
            } else {
              console.log("********************\nVocê errou!\n********************");
            }

            // Feedback final
            if (acertos === 3) {
              console.log("Você acertou todas as questões! Parabéns!");
            } else if (acertos === 2) {
              console.log("Você acertou duas! Muito bom!");
            } else if (acertos === 1) {
              console.log("Você acertou uma! Tente de novo.");
            } else {
              console.log("Você errou todas! Tente melhorar.");
            }

            prova.close();
          }
        );
      }
    );
  }
);