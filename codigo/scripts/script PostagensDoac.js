
// // código do Rommel - ** ANÚNCIOS DE DOAÇÃO ** 

// perguntas: como incluir foto enviada pelo usuario

document.addEventListener("DOMContentLoaded", function () {

  function leDadosAdoc() {
    let strDadosAdoc = localStorage.getItem('db2');
    let objDadosAdoc = {};

    if (strDadosAdoc) {
      objDadosAdoc = JSON.parse(strDadosAdoc);
    }
    else {
      objDadosAdoc = {
        petAdoc: [{
            carac: "Filhote de yorkshire, muito dócil, macho, porte pequeno.",
            especie: "cachorro",
            idadepet: "filhote - 3 meses",
            raca: "yorkshire",
            enderecoAdoc: "bairro União",
            emailAd: "laura@gmail.com",
            telAd: "31 9874-5621",
            fotoAd: "" }]
      }
    }
    return objDadosAdoc;
  }

  function salvaDadosAdoc(dados) {
    localStorage.setItem('db2', JSON.stringify(dados));
  }

  function imprimeAdoc() {
    let tela = document.getElementById('divDoacoes');
    let objDadosAdoc = leDadosAdoc();
    for (i = 0; i < objDadosAdoc.petAdoc.length; i++) {
      let novaAdoc = document.createElement('div');
      novaAdoc.classList.add('novaadoc');
      novaAdoc.innerHTML = `  <img src="${objDadosAdoc.petAdoc[i].fotoAd}" alt="Foto do Pet" width="100"> <p>${objDadosAdoc.petAdoc[i].carac}</p>`; // img
      let btnDetalhesAdoc = document.createElement('button');
      btnDetalhesAdoc.innerHTML = '<a href="#">Ver detalhes</a>';
      btnDetalhesAdoc.classList.add('btnDetalhes');
      novaAdoc.appendChild(btnDetalhesAdoc);
      tela.appendChild(novaAdoc);
    }
  }

  function incluirAdoc() {
    let objDadosAdoc = leDadosAdoc();
    let strCaracAdoc = document.getElementById('carac-adocao').value;    
    let strEmailAdoc = document.getElementById('adoc-email').value;
    let strTelAdoc = document.getElementById('adoc-tel').value;
    let strEspecie = document.getElementById('especie').value;
    let strIdade = document.getElementById('idadepet').value;
    let strRaca = document.getElementById('raca').value;
    let strEndereco = document.getElementById('endereco-adoc').value;
   // let fotoAd = document.getElementById('enviar-arquivoAd').files[0];



    let novaAdoc = {
      carac: strCaracAdoc,
      especie: strEspecie,
      idadepet: strIdade,
      raca: strRaca,
      enderecoAdoc: strEndereco,
      emailAd: strEmailAdoc,
      telAd: strTelAdoc,
     // fotoAd: strFotoAdoc
    };

    objDadosAdoc.petAdoc.push(novaAdoc);
    salvaDadosAdoc(objDadosAdoc);

    //att dados da tela
    imprimeAdoc();
  }

 
  imprimeAdoc();

})







