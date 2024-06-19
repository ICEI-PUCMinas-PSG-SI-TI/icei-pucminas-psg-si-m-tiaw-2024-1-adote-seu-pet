function mostrarInformacoes() {
    var informacoes = document.getElementById("informacoes");
    if (informacoes.style.display === "none") {
        informacoes.style.display = "block";
    } else {
        informacoes.style.display = "none";
    }
}

function searchcontainer(termo) {
    let historico = JSON.parse(localStorage.getItem('historicoPesquisas')) || [];

    historico.push(termo);

    localStorage.setItem('historicoPesquisas', JSON.stringify(historico));
}

function recuperarHistoricoDePesquisas() {
    const historico = JSON.parse(localStorage.getItem('historicoPesquisas')) || [];

    return historico;
}

adicionarPesquisaAoHistorico('ração para cachorro');
adicionarPesquisaAoHistorico('brinquedos para gatos');
adicionarPesquisaAoHistorico('veterinário São Paulo');

// Recuperar histórico de pesquisas
const historicoRecuperado = recuperarHistoricoDePesquisas();
console.log('Histórico de Pesquisas:', historicoRecuperado);

 







