// Obtém referências aos elementos do formulário e da tabela
const form = document.getElementById('form-contatos');
const nomeInput = document.getElementById('nome-contato');
const numeroInput = document.getElementById('numero-contato');
const tabelaContatos = document.querySelector('table tbody');

// Array para armazenar os contatos
const contatos = [];

// Adiciona um ouvinte de evento de submissão ao formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de submissão do formulário

    // Obtém os valores dos campos de entrada
    const nome = nomeInput.value;
    const numero = numeroInput.value;

    // Verifica se o número já existe na lista de contatos
    if (contatoExistente(numero)) {
        alert('Esse número já está na lista de contatos.');
        return;
    }

    // Chama a função para adicionar um contato à tabela
    adicionarContato(nome, numero);

    // Limpa os campos após adicionar o contato
    nomeInput.value = '';
    numeroInput.value = '';
});

// Função para verificar se um número já existe na lista de contatos
function contatoExistente(numero) {
    return contatos.some(contato => contato.numero === numero);
}

// Função para adicionar um novo contato à tabela
function adicionarContato(nome, numero) {
    // Adiciona o novo contato ao array
    contatos.push({ nome, numero });

    // Cria uma nova linha de tabela
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${numero}</td>
    `;

    // Adiciona a nova linha à tabela
    tabelaContatos.appendChild(novaLinha);
}
