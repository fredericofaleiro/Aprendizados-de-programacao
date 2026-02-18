let listaDeNumerosEscolhidos = [];
console.log (listaDeNumerosEscolhidos)
let numero = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 0

console.log (`o numero secreto é : ${numeroSecreto}`);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function textosCentrais(tag, texto) {
    titulo = document.querySelector(tag);
    titulo.innerHTML = (texto);
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function mensagensIniciais() {
    textosCentrais ('h1', 'Bem vindo ao jogo do numero secreto');
    textosCentrais ('p', `esconha um numero entre 1 e ${numero}`);
}

mensagensIniciais();

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++
     console.log (tentativas)
    console.log(`o usuario chutou o numero: ${chute}`);
    let portuguesCorreto = tentativas > 1? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        textosCentrais ('h1', 'parabens você acertou');
        let numerotentativas = `você acertou o numero secreto: ${numeroSecreto}`+` com ${tentativas} ${portuguesCorreto}`;
        textosCentrais ('p', numerotentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            textosCentrais ('p', `o numero secreto é menor, você fez ${tentativas} ${portuguesCorreto}`);
        } else {
            textosCentrais ('p', `o numero secreto é maior, você fez ${tentativas} ${portuguesCorreto}`);
        }
        limparCampo();
    }   
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarNumeroSecreto() {
   let numeroEscolhido = parseInt(Math.random() * numero + 1);
   let quantidadeDeElementos = listaDeNumerosEscolhidos.length;

   if (quantidadeDeElementos == numero) {
    listaDeNumerosEscolhidos = [];
   }

   if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
     return gerarNumeroSecreto();
   } else {
    listaDeNumerosEscolhidos.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function nd() {
    numeroSecreto = gerarNumeroSecreto();
    console.log (`o novo numero secreto é: ${numeroSecreto}`)
    console.log (`esses numeros não serão repetidos : ${listaDeNumerosEscolhidos}`);
    limparCampo();
    tentativas = 0;
    mensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

 

 