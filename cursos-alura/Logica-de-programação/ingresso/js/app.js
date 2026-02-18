function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso");
    let quantidade = document.getElementById("qtd");
    let pista = document.getElementById("qtd-pista");
    let superior = document.getElementById("qtd-superior");
    let inferior = document.getElementById("qtd-inferior");

    let qtdPista = parseInt(pista.textContent); 
    let qtdSuperior = parseInt(superior.textContent); 
    let qtdInferior = parseInt(inferior.textContent);
    let numQuantidade = parseInt(quantidade.value); 

    console.log (tipoIngresso.value);
    console.log (tipoIngresso.value);
    console.log (quantidade.value);
    console.log (pista.value);

    if (tipoIngresso.value=="pista") {
        resultadoPista = qtdPista - numQuantidade;
        
        if (resultadoPista < 0) {
            alert('acabaram os ingressos para a pista')
            resultadoPista = 0;
        }

     pista.innerHTML = `<li>${resultadoPista}</li>`

    } else if (tipoIngresso.value=="superior") {
        resultadoSuperior = qtdSuperior - numQuantidade;

        if (resultadoSuperior < 0) {
            alert('acabaram os ingressos para as cadeiras superiores')
            resultadoSuperior = 0;
        }

        superior.innerHTML = `<li>${resultadoSuperior}</li>`
    } else {
    resultadoInferior = qtdInferior - numQuantidade;

        if (resultadoInferior < 0) {
            alert('acabaram os ingressos para as cadeiras inferiores')
            resultadoInferior = 0;
        }

        inferior.innerHTML = `<li>${resultadoInferior}</li>`
    }
}
