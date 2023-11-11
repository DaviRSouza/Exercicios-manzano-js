import botoesInfo from "./sumario.js";

const botoesContainer = document.getElementById('botoesContainer');

botoesInfo.forEach(info => {
    const botao = document.createElement('button');
    botao.textContent = info.nome;

    botao.style.border = '2px solid #fff';
    botao.style.borderRadius = '50px';
    botao.style.padding = '10px 20px';
    botao.style.margin = '5px'
    botao.style.backgroundColor = 'transparent';
    botao.style.color = '#fff';
    botao.style.cursor = 'pointer';
    botao.addEventListener('mouseenter', () => {
        botao.style.transition = 'background-color 0.5s ease';
        botao.style.border = '2px solid #b00000';
        botao.style.color = '#b00000';
    });
    botao.addEventListener('mouseleave', () => {
        botao.style.border = '1px solid #fff';
        botao.style.backgroundColor = 'transparent';
        botao.style.color = '#fff';
    });

    botao.addEventListener('click', () => {
        info.funcao();
    });

    botoesContainer.appendChild(botao);
});