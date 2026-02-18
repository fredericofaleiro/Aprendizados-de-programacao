let listaDeAmigos = []

function adicionar() {
  let amigo = document.querySelector('input')

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

     if (listaDeAmigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

  listaDeAmigos.push(amigo.value)

  console.log(amigo.value)
  console.log(listaDeAmigos)

  caixaIncluidos = document.getElementById('lista-amigos')
  caixaIncluidos.innerHTML = `<p class="friends__title">${listaDeAmigos}</p>`
  amigo.value = ''
}

function sortear() {
    if (listaDeAmigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
}

    embaralha(listaDeAmigos)
    let sorteio = document.getElementById('lista-sorteio')
   
for(let i=0; i < listaDeAmigos.length;i++) {

    if (i == listaDeAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ` --> ` + listaDeAmigos[0] + `<br>`
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaDeAmigos[i] + ` --> ` + listaDeAmigos[i + 1] + `<br>`
        }
}
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaDeAmigos= []
    document.getElementById('lista-amigos').innerHTML = " "
    document.getElementById('lista-sorteio').innerHTML = " "
}