// Usamos um nome descritivo e 'const', pois a referência à div não mudará.
const areaInterativa = document.getElementById('area');

areaInterativa.addEventListener('click', clicar);
areaInterativa.addEventListener('mouseenter', entrar);
areaInterativa.addEventListener('mouseout', sair);

function clicar() {
    // Usamos a variável com nome claro
    areaInterativa.innerText = 'Clicou!';
    areaInterativa.style.backgroundColor = 'red'; // Adicionamos a mudança de cor que faltava
}

function entrar() {
    areaInterativa.innerText = 'Entrou!';
    areaInterativa.style.backgroundColor = 'green'; // Adicionamos a mudança de cor
}

function sair () {
    areaInterativa.innerText = 'Saiu!';
    areaInterativa.style.backgroundColor = 'dodgerblue'; // Voltamos à cor original
}