            // chamando os elementos html para o javascript
            const start = window.document.getElementById('start');
            const end = window.document.getElementById('end');
            const pass = window.document.getElementById('pass');
            const btncalc = window.document.getElementById('btncalc');
            const contagem = window.document.getElementById('contagem')
            
            // adificonando evento ao botao
            btncalc.addEventListener('click', calcularevento)

            function calcularevento() {
                // mensagem de erro caso não haja valor nas div
                if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
                    window.alert('Preencha todos os campos antes de calcular!')
                }
                // buscando apenas o valor numererico
                const n1 = Number(start.value);
                const n2 = Number(end.value);
                let n3 = Number(pass.value);

                if (n3 <= 0) {
                alert('Passo inválido! Considerando PASSO = 1');
                n3 = 1;
                }

                // removendo frase ao executar ação do botao
                contagem.innerHTML = '';

                if ( n1 < n2) { // contagem do menor para o maior
                     for(let i = n1; i <=n2; i += n3) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    contagem.appendChild(listItem);
                    }
                } else { // contagem do maior para o menor
                    for(let i = n1; i >= n2; i -= n3) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    contagem.appendChild(listItem);   
                    }
                }


            }