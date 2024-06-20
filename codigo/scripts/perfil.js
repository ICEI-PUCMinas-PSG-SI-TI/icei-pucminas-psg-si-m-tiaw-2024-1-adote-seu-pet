// Função para exibir o formulário de edição
function exibirFormulario(titulo) {
    // Altera o título do formulário
    document.getElementById('formTitle').innerText = titulo;

    // Recupera os dados do localStorage
    const perfil = JSON.parse(localStorage.getItem('perfil')) || {};

    // Atualiza os valores dos campos no formulário
    document.getElementById('nome').value = perfil.nome || '';
    document.getElementById('telefone').value = perfil.telefone || '';
    document.getElementById('email').value = perfil.email || '';
    document.getElementById('sobre').value = perfil.sobre || '';

    // Exibe a foto de perfil
    document.getElementById('fotoPreview').src = perfil.foto || '';

    // Habilita os campos para edição
    document.getElementById('nome').disabled = false;
    document.getElementById('telefone').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('sobre').disabled = false;
    document.getElementById('fotoPerfil').disabled = false;
    document.getElementById('salvarBtn').disabled = false;
    document.getElementById('excluirFotoBtn').disabled = false;
}

// Função para visualizar a foto de perfil selecionada
function previewFoto(event) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.getElementById('fotoPreview');
        img.src = reader.result; // Define o src da imagem como o conteúdo do arquivo selecionado
    };

    reader.readAsDataURL(file);
}

// Obtém o input de arquivo de foto de perfil
const fotoPerfilInput = document.getElementById('fotoPerfil');

// Adiciona um ouvinte de evento para o evento 'change'
fotoPerfilInput.addEventListener('change', previewFoto);

// Função para salvar as informações (incluindo a foto de perfil) no localStorage
function salvarInformacoes() {
    // Salvar a foto de perfil no localStorage
    const fotoPerfil = document.getElementById('fotoPreview').src;
    localStorage.setItem('fotoPerfil', fotoPerfil);

    // Alerta para indicar que as informações do perfil foram atualizadas
    alert('Informações do perfil atualizadas com sucesso!');
}

// Função para exibir os botões ao clicar em "Editar Informações"
function exibirBotoes() {
    // Seleciona os botões de salvar e excluir foto
    document.getElementById('botoesPerfil').style.display = 'flex';
    const salvarBtn = document.getElementById('salvarBtn');
    const excluirFotoBtn = document.getElementById('excluirFotoBtn');
    
    // Define o estilo dos botões para torná-los visíveis
    salvarBtn.style.display = 'block';
    excluirFotoBtn.style.display = 'block';
}

// Adiciona um ouvinte de evento de clique ao botão "Editar Informações"
const editarInfoBtn = document.getElementById('editarInfoBtn');
editarInfoBtn.addEventListener('click', exibirBotoes);

// Função para excluir a foto de perfil
function excluirFoto() {
    // Remove a foto de perfil do localStorage
    localStorage.removeItem('fotoPerfil');

    // Remove a foto de perfil da visualização
    document.getElementById('fotoPreview').src = '';

    // Limpa o input de seleção de arquivo para a foto de perfil
    document.getElementById('fotoPerfil').value = '';

    // Exibe alerta de foto excluída
    alert('Foto de perfil excluída com sucesso!');
}

// Adiciona um ouvinte de evento ao botão "Excluir Foto"
const excluirFotoBtn = document.getElementById('excluirFotoBtn');
excluirFotoBtn.addEventListener('click', excluirFoto);


// Função para carregar as informações do localStorage quando a página é carregada
function carregarInformacoes() {
    // Carregar a foto de perfil do localStorage
    const fotoPerfil = localStorage.getItem('fotoPerfil');
    if (fotoPerfil) {
        document.getElementById('ftperfil').src = fotoPerfil;
    }

}

// Chamar a função para carregar as informações quando a página é carregada
carregarInformacoes();

// Função para carregar as informações do perfil do localStorage quando a página é carregada
function carregarPerfil() {
    // Recupera os dados do localStorage
    const perfil = JSON.parse(localStorage.getItem('perfil')) || {};

    // Atualiza os valores dos campos no formulário
    document.getElementById('nome').value = perfil.nome || '';
    document.getElementById('telefone').value = perfil.telefone || '';
    document.getElementById('email').value = perfil.email || '';
    document.getElementById('sobre').value = perfil.sobre || '';

    // Exibe a foto de perfil
    const fotoPerfil = perfil.foto || '';
    if (fotoPerfil) {
        document.getElementById('fotoPreview').src = fotoPerfil;
    }
}

// Adiciona um listener para o evento "DOMContentLoaded" que ocorre quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarPerfil);


// Função para salvar as informações do perfil no LocalStorage
function salvarPerfil(event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const sobre = document.getElementById('sobre').value;
    const foto = document.getElementById('fotoPreview').src;

    // Cria um objeto com as informações do perfil
    const perfil = {
        nome: nome,
        telefone: telefone,
        email: email,
        sobre: sobre,
        foto: foto
    };

    // Salva o perfil no localStorage como uma string JSON
    localStorage.setItem('perfil', JSON.stringify(perfil));

    // Desabilita os campos após salvar
    document.getElementById('nome').disabled = true;
    document.getElementById('telefone').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('sobre').disabled = true;
    document.getElementById('fotoPerfil').disabled = true;
    document.getElementById('salvarBtn').disabled = true;

    // Oculta os botões após salvar
    document.getElementById('botoesPerfil').style.display = 'none';

    // Exibe alerta de perfil atualizado
    alert('Informações do perfil atualizadas com sucesso!');

    // Define o título do formulário de volta para "Seu perfil"
    document.getElementById('formTitle').innerText = 'Seu perfil';
}

// Adiciona um listener para o evento submit do formulário
document.getElementById('perfilForm').addEventListener('submit', salvarPerfil);

// Função para aplicar a máscara de telefone
function phoneMask(value) {
    let result = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

    // Aplica a máscara de acordo com o tamanho do número
    if (result.length > 11) {
        result = result.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (result.length > 7) {
        result = result.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (result.length > 2) {
        result = result.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else if (value.trim() !== "") {
        result = result.replace(/^(\d*)/, "($1");
    }

    return result;
}

// Obtém o input de telefone
const telefoneInput = document.getElementById('telefone');

// Adiciona um ouvinte de evento para o evento 'input'
telefoneInput.addEventListener('input', function() {
    // Obtém o valor atual do input
    let valor = this.value;
    // Aplica a máscara ao valor
    valor = phoneMask(valor);
    // Atualiza o valor do input com a máscara
    this.value = valor;
});
// Função para calcular a média da avaliação
function calcularMediaAvaliacao() {
    const estrelas = document.querySelectorAll('input[name="avaliacao"]:checked');
    let totalAvaliacoes = 0;

    estrelas.forEach(estrela => {
        totalAvaliacoes += parseInt(estrela.value);
    });

    const media = totalAvaliacoes / estrelas.length;
    const mediaArredondada = media.toFixed(1);

    document.getElementById('mediaAvaliacao').innerText = `Média de avaliação: ${mediaArredondada}`;
}

// Adiciona o evento de mudança para recalcular a média quando a avaliação muda
const avaliacoes = document.querySelectorAll('input[name="avaliacao"]');
avaliacoes.forEach(avaliacao => {
    avaliacao.addEventListener('change', calcularMediaAvaliacao);
});

// Calcula a média inicialmente ao carregar a página
calcularMediaAvaliacao();
