let num = document.getElementById('num')
let btnAdd = document.getElementById('btnAdd')
let lista = document.getElementById('listaSelect')
let fnz = document.getElementById('avaliarLista')
let res = document.getElementById('areaResultado')


let listaDeNumeros = []

function adicionarNumero() {

    n = Number(num.value)
    if (n > 100 || n < 1 || listaDeNumeros.includes(n)) {
        window.alert('Valor inválido ou já encontrado na lista.')
        num.innerText =""
    } else {
        listaDeNumeros.push(n)
        let item = document.createElement('option')
        item.text = `Esse é o item ${n} da lista` 
        item.value = `${n}`
        lista.appendChild(item)
    }

    // limpa o input e coloca o foco de volta
    num.value = ""
    num.focus()

}

function finalizar() {
    if (listaDeNumeros.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {

    }
}


/*



INÍCIO DA FUNÇÃO adicionarNumero:
  1. LEIA o número digitado no 'inputNumero'.

  2. VALIDE O NÚMERO:
     - SE o número é menor que 1 OU maior que 100,
       OU SE o número já existe dentro do array 'listaDeNumeros':
         - MOSTRE um alerta na tela dizendo "Valor inválido ou já encontrado na lista."
         - PARE A EXECUÇÃO DA FUNÇÃO AQUI.

  3. SE O NÚMERO É VÁLIDO:
     - ADICIONE o número ao final do array 'listaDeNumeros'.
     - CRIE um novo elemento <option> para o 'listaSelect'.
     - DEFINA o texto do novo <option> para ser algo como "Valor X adicionado."
     - ADICIONE o novo <option> dentro do 'listaSelect'.
     - LIMPE a 'areaResultado' (para o caso de uma análise já ter sido feita).

  4. LIMPE o campo 'inputNumero'.
  5. VOLTE o foco (cursor) para o campo 'inputNumero'.
FIM DA FUNÇÃO






INÍCIO DA FUNÇÃO finalizar:
  1. VERIFIQUE SE A LISTA ESTÁ VAZIA:
     - SE o tamanho do array 'listaDeNumeros' for igual a 0:
         - MOSTRE um alerta na tela dizendo "Adicione valores antes de finalizar!".
         - PARE A EXECUÇÃO DA FUNÇÃO AQUI.

  2. SE A LISTA NÃO ESTÁ VAZIA, CALCULE AS ESTATÍSTICAS:
     - CRIE uma variável 'totalDeNumeros' e guarde nela o tamanho do array.
     - CRIE uma variável 'maiorValor' e inicie com o primeiro número da lista.
     - CRIE uma variável 'menorValor' e inicie com o primeiro número da lista.
     - CRIE uma variável 'somaDosValores' e inicie com 0.

     - PARA CADA 'numero' DENTRO DO ARRAY 'listaDeNumeros':
         - ADICIONE o 'numero' à 'somaDosValores'.
         - SE o 'numero' for maior que o 'maiorValor', então o 'maiorValor' se torna o 'numero'.
         - SE o 'numero' for menor que o 'menorValor', então o 'menorValor' se torna o 'numero'.

     - CRIE uma variável 'mediaDosValores' e calcule-a dividindo a 'somaDosValores' pelo 'totalDeNumeros'.

  3. MOSTRE OS RESULTADOS NA TELA:
     - LIMPE a 'areaResultado'.
     - EXIBA na 'areaResultado' os seguintes textos:
         - "Ao todo, temos [totalDeNumeros] números cadastrados."
         - "O maior valor informado foi [maiorValor]."
         - "O menor valor informado foi [menorValor]."
         - "Somando todos os valores, temos [somaDosValores]."
         - "A média dos valores digitados é [mediaDosValores]."
FIM DA FUNÇÃO




*/


