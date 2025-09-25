listaDeTarefas = [];
textoImput = document.getElementById('txt');
buttonImput = document.getElementById('add');
blocoLista = document.getElementById('list');


function renderizarTarefas() {
    blocoLista.innerHTML = ""

    for (let i = 0; i < listaDeTarefas.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeTarefas[i];
        blocoLista.appendChild(item);
    }
}

function adicionar() {
    let txtValue = textoImput.value.trim();
    if (txtValue === "") {
        window.alert('Favor preencher o espaço');
    } else {

    listaDeTarefas.push(txtValue);
    renderizarTarefas();
    textoImput.value = "";
    textoImput.focus();
    }
}
