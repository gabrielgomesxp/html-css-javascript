            // chamando os elementos html para o javascript
            const start = window.document.getElementById('start');
            const end = window.document.getElementById('end');
            const pass = window.document.getElementById('pass');
            const btncalc = window.document.getElementById('btncalc');
            const contagem = window.document.getElementById('contagem')
            
            // adificonando evento ao botao
            btncalc.addEventListener('click', calcularevento)

            function calcularevento() {  // buscando o valor numero
                const n1 = Number(start.value);
                const n2 = Number(end.value);
                const n3 = Number(pass.value);

                // removendo frase ao executar ação do botao
                contagem.innerHTML = '';

                if ( n1 < n2) { // contagem do maior para o menor
                     for(var i = n1; i <=n2; i += n3) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    contagem.appendChild(listItem);
                    }
                } else { // contagem do menor para o maior
                    for(var i = n1; i >= n2; i -= n3) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    contagem.appendChild(listItem);   
                    }
                }


            }