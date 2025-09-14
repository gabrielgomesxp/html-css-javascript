            const start = window.document.getElementById('start');
            const end = window.document.getElementById('end');
            const pass = window.document.getElementById('pass');
            const btncalc = window.document.getElementById('btncalc');
            const contagem = window.document.getElementById('contagem')
        
            btncalc.addEventListener('click', calcularevento)

            function calcularevento() { 
                const n1 = Number(start.value);
                const n2 = Number(end.value);
                const n3 = Number(pass.value);

                contagem.innerHTML = '';

                for(var i = n1; i <=n2; i += n3) {
                    const listItem = document.createElement('li');
                    listItem.textContent = i;
                    contagem.appendChild(listItem);
                }

            }