function alterarStatus(id) {
 jogoEscolhido = document.getElementById(`game-${id}`)
 imagem = jogoEscolhido.querySelector (".dashboard__item__img")
 botao = jogoEscolhido.querySelector (".dashboard__item__button")
 nome = jogoEscolhido.querySelector (".dashboard__item__name")

 if (imagem.classList.contains("dashboard__item__img--rented")) {

    if (confirm(`tem certeza que quer devolver o ${nome.innerHTML}?`)) {
      imagem.classList.remove("dashboard__item__img--rented")
    botao.classList.remove("dashboard__item__button--return")
    botao.innerHTML = "alugar"  
    }

 } else {
    imagem.classList.add("dashboard__item__img--rented")
    botao.classList.add("dashboard__item__button--return")
    botao.innerHTML = "devolver"

    console.log (`o usuario alugou: ${nome.innerHTML}`)
 }

}

