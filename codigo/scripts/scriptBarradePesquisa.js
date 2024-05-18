document.addEventListener('DOMContentLoaded', function() {
    // Função de pesquisa
    function search() {
        const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
        
        // Verificar  se o campo de pesquisa está vazio
        if (searchInput === "") {
            alert("Erro! Preencha o campo de pesquisa.");
            return;
        }

        const titles = ["Você Sabia?", "Importância das ONGs", "Zoonoses", "Adestramento"];

        // Verificar se o termo pesquisado corresponde a algum dos títulos
        const titleIndex = titles.findIndex(title => title.toLowerCase() === searchInput);
        if (titleIndex !== -1) {
            // Se correspondência encontrada, rola a página até o botão correspondente
            const btnId = `btnTema${titleIndex + 1}`;
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        // Se nenhum título correspondente seja encontrado, realiza a pesquisa normalmente
        const texts = document.querySelectorAll('#texto,#incorporaNovoTexto1, #incorporaNovoTexto2, #incorporaNovoTexto3');
        let found = false;
        texts.forEach(text => {
            const textContent = text.textContent.toLowerCase();
            const highlightedText = textContent.replace(new RegExp(searchInput, 'gi'), '<span class="highlight">$&</span>');
            text.innerHTML = highlightedText;
            if (textContent.includes(searchInput)) {
                text.classList.remove('hide');
                text.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            } else {
                text.classList.add('hide');
            }
        });

        // Se nenhum resultado for encontrado, exibe um alerta
        if (!found) {
            alert("Não Encontrado!");
        }
    }

    // Função de pesquisa ao botão
    document.querySelector('.search-container button').addEventListener('click', search);

   

});
