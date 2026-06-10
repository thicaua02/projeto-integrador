const cabecalho_botao = document.querySelector('.cabecalho__botao');
const cabecalho_navegaco = document.querySelector('.cabecalho__navegacao');

cabecalho_botao.addEventListener('pointerdown', () => {
    cabecalho_navegaco.classList.toggle('ativado');
})