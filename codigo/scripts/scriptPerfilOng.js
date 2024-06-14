// Função para exibir o formulário de edição
function exibirFormulario(titulo) {
    // Altera o título do formulário
    document.getElementById('formTitle').innerText = titulo;

    // Recupera os dados do localStorage
    const perfil = JSON.parse(localStorage.getItem('perfil')) || {};

    // Atualiza os valores dos campos no formulário
    document.getElementById('nomeOng').value = perfil.nome || '';
    document.getElementById('telefoneOng').value = perfil.telefone || '';
    document.getElementById('emailOng').value = perfil.email || '';
    document.getElementById('sobreOng').value = perfil.sobre || '';

    // Exibe a foto de perfil
    document.getElementById('fotoPreviewOng').src = perfil.foto || '';

    // Habilita os campos para edição
    document.getElementById('nomeOng').disabled = false;
    document.getElementById('telefoneOng').disabled = false;
    document.getElementById('emailOng').disabled = false;
    document.getElementById('sobreOng').disabled = false;
    document.getElementById('fotoPerfilOng').disabled = false;
    document.getElementById('salvarBtn').disabled = false;
    document.getElementById('excluirFotoBtn').disabled = false;
}

// Função para visualizar a foto de perfil selecionada
function previewFotoOng(event) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.getElementById('fotoPreviewOng');
        img.src = reader.result; // Define o src da imagem como o conteúdo do arquivo selecionado
    };

    reader.readAsDataURL(file);
}

// Obtém o input de arquivo de foto de perfil
const fotoPerfilInput = document.getElementById('fotoPerfilOng');

// Adiciona um ouvinte de evento para o evento 'change'
fotoPerfilInput.addEventListener('change', previewFotoOng);

// Função para salvar as informações (incluindo a foto de perfil) no localStorage
function salvarInformacoes() {
    // Salvar a foto de perfil no localStorage
    const fotoPerfil = document.getElementById('fotoPreviewOng').src;
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
    document.getElementById('fotoPreviewOng').src = '';

    // Limpa o input de seleção de arquivo para a foto de perfil
    document.getElementById('fotoPerfilOng').value = '';

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
        document.getElementById('ftperfilOng').src = fotoPerfil;
    }

}

// Chamar a função para carregar as informações quando a página é carregada
carregarInformacoes();

// Função para carregar as informações do perfil do localStorage quando a página é carregada
function carregarPerfil() {
    // Recupera os dados do localStorage
    const perfil = JSON.parse(localStorage.getItem('perfil')) || {};

    // Atualiza os valores dos campos no formulário
    document.getElementById('nomeOng').value = perfil.nome || '';
    document.getElementById('telefoneOng').value = perfil.telefone || '';
    document.getElementById('emailOng').value = perfil.email || '';
    document.getElementById('sobreOng').value = perfil.sobre || '';

    // Exibe a foto de perfil
    const fotoPerfil = perfil.foto || '';
    if (fotoPerfil) {
        document.getElementById('fotoPreviewOng').src = fotoPerfil;
    }
}

// Adiciona um listener para o evento "DOMContentLoaded" que ocorre quando a página é carregada
document.addEventListener('DOMContentLoaded', carregarPerfil);


// Função para salvar as informações do perfil no LocalStorage
function salvarPerfil(event) {
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nomeOng').value;
    const telefone = document.getElementById('telefoneOng').value;
    const email = document.getElementById('emailOng').value;
    const sobre = document.getElementById('sobreOng').value;
    const foto = document.getElementById('fotoPreviewOng').src;

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
    document.getElementById('nomeOng').disabled = true;
    document.getElementById('telefoneOng').disabled = true;
    document.getElementById('emailOng').disabled = true;
    document.getElementById('sobreOng').disabled = true;
    document.getElementById('fotoPerfilOng').disabled = true;
    document.getElementById('salvarBtn').disabled = true;

    // Oculta os botões após salvar
    document.getElementById('botoesPerfil').style.display = 'none';

    // Exibe alerta de perfil atualizado
    alert('Informações do perfil atualizadas com sucesso!');

    // Define o título do formulário de volta para "Suas Informações"
    document.getElementById('formTitle').innerText = 'Suas Informações:';
}

// Adiciona um listener para o evento submit do formulário
document.getElementById('perfilFormOng').addEventListener('submit', salvarPerfil);

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
const telefoneInput = document.getElementById('telefoneOng');

// Adiciona um ouvinte de evento para o evento 'input'
telefoneInput.addEventListener('input', function() {
    // Obtém o valor atual do input
    let valor = this.value;
    // Aplica a máscara ao valor
    valor = phoneMask(valor);
    // Atualiza o valor do input com a máscara
    this.value = valor;
});
