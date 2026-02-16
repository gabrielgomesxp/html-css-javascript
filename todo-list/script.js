listaDeTarefas = [];
textoImput = document.getElementById('txt');
buttonImput = document.getElementById('add');
blocoLista = document.getElementById('list');


function renderizarTarefas() {
    blocoLista.innerHTML = ""

    for (let i = 0; i < listaDeTarefas.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeTarefas[i];

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = "remover";
        item.appendChild(botaoRemover); // coloca o botao dentro da lista
        blocoLista.appendChild(item);
    }
}


function adicionar() {
    let txtValue = textoImput.value.trim(); // obter o texto digitado em um campo de entrada (input) e remover todos os espaços em branco extras do início e do final da string. 
    if (txtValue === "") {
        window.alert('Favor preencher o espaço');
    } else {

    listaDeTarefas.push(txtValue); // jogando tudo oque o usuario escrevendo dentro da lista
    renderizarTarefas(); // chama a função para criar a lista
    textoImput.value = ""; // limpa para poder fazer outro preenchimento
    textoImput.focus(); // coloca o  cursor para fazer novo preenchimento
    }
}
