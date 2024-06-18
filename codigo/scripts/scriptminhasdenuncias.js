function exibirFormulario() {
    const quadroEdicao = document.getElementById('quadro-edicao');
    const quadroImagem = document.getElementById('quadro-imagem');

    // Verificar se o quadro de edição já possui texto antes de substituí-lo pelo texto padrão
    if (!quadroEdicao.textContent.trim()) {
        quadroEdicao.innerHTML = 'Você pode editar este texto agora.';
    }

    quadroEdicao.contentEditable = true;
    quadroEdicao.style.backgroundColor = '#ffffff';
    quadroImagem.querySelector('p').style.display = 'none';
    quadroImagem.querySelector('input').style.display = 'block';

    quadroEdicao.style.maxHeight = '200px';
    quadroEdicao.style.overflowY = 'auto';

    // Mostrar o botão Salvar e esconder o botão Editar
    document.getElementById('salvarInfoBtn').style.display = 'inline-block';
    document.getElementById('editarInfoBtn').style.display = 'none';

    // Mostrar o botão Excluir Foto
    document.getElementById('excluirFotoBtn').style.display = 'inline-block';
}


// Função para salvar as informações
function salvarInformacoes() {
    const quadroEdicao = document.getElementById('quadro-edicao');
    const quadroImagem = document.getElementById('quadro-imagem');
    quadroEdicao.contentEditable = false;
    quadroEdicao.style.backgroundColor = '#f2f2f2';
    quadroImagem.querySelector('input').style.display = 'none';

    // Salvar o conteúdo no local storage
    localStorage.setItem('informacoes', quadroEdicao.innerHTML);
    localStorage.setItem('imagem', document.getElementById('fotoPreview').src);

    // Mostrar o botão Editar e esconder o botão Salvar
    document.getElementById('salvarInfoBtn').style.display = 'none';
    document.getElementById('editarInfoBtn').style.display = 'inline-block';
}

// Função para não salvar as informações editadas
function naoSalvar() {
    const quadroEdicao = document.getElementById('quadro-edicao');

    // Recuperar o conteúdo anteriormente salvo do local storage
    const informacoesSalvas = localStorage.getItem('informacoes');

    // Verificar se há conteúdo anteriormente salvo e restaurá-lo
    if (informacoesSalvas) {
        quadroEdicao.innerHTML = informacoesSalvas;
    }

    // Esconder o botão Não Salvar
    document.getElementById('naoSalvarBtn').style.display = 'none';
}


// Função para exibir a imagem selecionada
function previewFoto(event) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.getElementById('fotoPreview');
        img.src = reader.result;
        img.style.display = 'block';
    };

    reader.readAsDataURL(file);
}

function excluirFoto() {
    // Remover a foto
    document.getElementById('fotoPreview').src = ''; // Define o src da imagem como vazio
    document.getElementById('fotoPreview').style.display = 'none'; // Oculta a imagem
}

// Carregar as informações salvas do local storage ao carregar a página
window.onload = function() {
    const quadroEdicao = document.getElementById('quadro-edicao');
    const informacoesSalvas = localStorage.getItem('informacoes');
    if (informacoesSalvas) {
        quadroEdicao.innerHTML = informacoesSalvas;
    }

    const imagemSalva = localStorage.getItem('imagem');
    if (imagemSalva) {
        const img = document.getElementById('fotoPreview');
        img.src = imagemSalva;
        img.style.display = 'block';
    }
};



