/* 
Objetivo 1 - quando usuário clicar no botão de mostrar mais deve abrir os projetos escondidos no html

Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

Passo 2 - identificar o clique no botão

Passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 - esconder o botão mostrar mais

Passo 1- pegar o botão e esconder ele

*/

// Objetivo 1 - Passo 1

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

// Passo 2 

botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 (é feito dentro do passo 2, por isso ta aqui)
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });

    // Objetivo 2 - passo 1

    botaoMostrarProjetos.classList.add("remover")
});
