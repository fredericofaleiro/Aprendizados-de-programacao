 let listaDeProdutos = []
 let produto = document.getElementById("produto");
 let quantidade = document.getElementById("quantidade");
 let total = 0

function adicionar() {
    let produtoSelecionado = produto.value;
    let partes = produtoSelecionado.split("- R$");
    let nome = partes[0];
    let preço = partes[1];
    document.getElementById("add");
    listaDeProdutos.push(produto.value);
    let subtotal = calculo(preço, quantidade.value);

    console.log(quantidade.value);
    console.log (listaDeProdutos);
    console.log(`o nome do produto é: ${nome}`);
    console.log(`o preço do produto é: R$${preço}`);
    console.log(`o subtotal é : R$${subtotal}`);


    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<li><span class="texto-azul">${quantidade.value}x</span> ${nome} <span class="texto-azul">R$${subtotal}</span></li>`;
    total = total + subtotal;
    console.log(total);
   
   let carrinhoTotal = document.getElementById("valor-total");
   carrinhoTotal.innerHTML = `<p class="carrinho__total"> Total: R$${total} </p>`;
}

function calculo(preço, quantidade) {
  preço = parseFloat(preço);
  quantidade = parseFloat(quantidade);
  return subtotal = preço * quantidade ;

}
function limpar() {
  listaDeProdutos = []; 
  total = 0; 

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = ""; 

  let carrinhoTotal = document.getElementById("valor-total");
  carrinhoTotal.innerHTML = `<p class="carrinho__total"> Total: R$${total} </p>`; 
}