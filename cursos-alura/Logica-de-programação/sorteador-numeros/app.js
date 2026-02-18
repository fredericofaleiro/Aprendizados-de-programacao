let listaDeNumeros = [];

function inputs(tag) {
  return document.getElementById(tag).value;
}

function sortear() {
    document.getElementById("btn-sortear")
    console.log ('fui clicado!')
   listaDeNumeros = []
 
   let qntDeNumeros = inputs("quantidade");
   let doNumero = inputs("de");
   let aoNumero = inputs("ate");

   portuguesNumeros = qntDeNumeros > 1 ? 'numeros' : 'numero';
   portuguesSorteados = qntDeNumeros > 1? 'sorteados' : 'sorteado';

   if (doNumero === '' || aoNumero === '' || qntDeNumeros === '') {
      alert ('ops, há algo de errado! tente colocar valores nas caixas de entrada')
      return;
   }

   if (doNumero >= aoNumero) {
      alert ('ops, há algo de errado! tente escrever o maior valor em "até numero" ')
   } else {
    console.log (`o usuario quer que o programa gere ${qntDeNumeros} ${portuguesNumeros} de ${doNumero} ao ${aoNumero}`);

    for (a=0; qntDeNumeros > a;a++) {
      let numeroSorteado = calculo();

       while (listaDeNumeros.includes(numeroSorteado)) {

         if (qntDeNumeros > aoNumero - doNumero + 1){
         alert (`erro`);
         return

         } else {
           numeroSorteado = calculo() 
         }
      
         
      }
      
      listaDeNumeros.push(numeroSorteado)

       console.log (`o numero sorteado é: ${numeroSorteado}`);

       

    }
   
    
    console.log (`os numeros sorteados foram ${listaDeNumeros}`);



    textoFinal = document.getElementById("resultado");
    textoFinal.innerHTML = (`<label class="texto__paragrafo">${portuguesNumeros} ${portuguesSorteados}:  ${listaDeNumeros} </label>`);

   alterarCorBotao()
   }
}


function calculo() {
   doNumero = document.getElementById("de").value;
   aoNumero = document.getElementById("ate").value;
   resultado = parseInt(Math.random() * aoNumero + 1);

   while (resultado < doNumero) {
    resultado = parseInt(Math.random() * aoNumero + 1);
   } 

   return resultado;
 
}  

function alterarCorBotao() {
  let botao = document.getElementById('btn-reiniciar')
  if (botao.classList.contains("container__botao-desabilitado")) {
   botao.classList.remove("container__botao-desabilitado");
   botao.classList.add("container__botao")
  } else {
   botao.classList.remove("container__botao")
   botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar() {
  listaDeNumeros = []
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  textoFinal = document.getElementById("resultado");
  textoFinal.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
  let bc = document.getElementById("btn-reiniciar")
  bc.innerHTML = `<button onclick="reiniciar()" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>`
  alterarCorBotao()

}

