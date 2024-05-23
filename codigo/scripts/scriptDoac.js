
// // código do Rommel - ** ANÚNCIOS DE DOAÇÃO ** 

// perguntas: como incluir foto enviada pelo usuario

/* - código antigo 
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
          fotoAd: ""
        }]
      }
    }
    return objDadosAdoc;
  }

  function salvaDadosAdoc(dados) {
    localStorage.setItem('db2', JSON.stringify(dados));
  }

  function imprimeAdoc() {
    let tela = document.getElementById('divDoacoes');
    let objDadosAdoc = leDadosDen();
    for (i = 0; i < objDadosAdoc.petAband.length; i++) {
      let novaAdoc = document.createElement('div');
      novaAdoc.classList.add('novaadoc');
      novaAdoc.innerHTML = `<img id="displayImage" src="" alt="Foto do Pet" width="100"> <p>${objDadosAdoc.petAdoc[i].carac}</p>`; // img
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


    let novaAdoc = {
      carac: strCaracAdoc,
      especie: strEspecie,
      idadepet: strIdade,
      raca: strRaca,
      enderecoAdoc: strEndereco,
      emailAd: strEmailAdoc,
      telAd: strTelAdoc,
      //fotoAd: strFotoAdoc
    };

    objDadosAdoc.petAdoc.push(novaAdoc);
    salvaDadosAdoc(objDadosAdoc);

    //att dados da tela
    imprimeAdoc();
  }

  // botão enviar
  // dps: validar se usuario enviou foto do pet tbm

  let strCaracAdoc = document.getElementById('carac-adocao');
  let strEmailAdoc = document.getElementById('adoc-email');
  let strTelAdoc = document.getElementById('adoc-tel');
  let strEspecie = document.getElementById('especie');
  let strIdade = document.getElementById('idadepet');
  let strEndereco = document.getElementById('endereco-adoc');

  const formAdoc = document.getElementById("formAdoc"); // id do form
  const fileInput = document.getElementById("enviar-arquivoAd"); // input type file
  const displayImage = document.getElementById('displayImage'); // id da imagem


  formAdoc.addEventListener('submit', (e) => {

    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64Image = event.target.result;
        localStorage.setItem('uploadedImage', base64Image);
        displayImage.src = base64Image;
        alert('Imagem carregada e salva com sucesso!');
      }
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione uma imagem para fazer upload.');
    }


    if (strCaracAdoc.value == "" || strEmailAdoc.value == "" || strTelAdoc.value == "" || strEspecie.value == "" || strIdade.value == "" || strEndereco.value == "") {
      alert("Preencha todos os campos obrigatórios!");
      e.preventDefault();
      return;
    }

    else {
      alert("Enviado!");
      incluirAdoc();
    }
  })

  // Carregar a imagem do local storage, se existir
  const savedImage = localStorage.getItem('uploadedImage');
  if (savedImage) {
      displayImage.src = savedImage;
  }



})


*/

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
          fotoAd: ""
        }]
      }
    }
    return objDadosAdoc;
  }

  function salvaDadosAdoc(dados) {
    localStorage.setItem('db2', JSON.stringify(dados));
  }



  function incluirAdoc(base64Image) {
    let objDadosAdoc = leDadosAdoc();
    let strCaracAdoc = document.getElementById('carac-adocao').value;
    let strEmailAdoc = document.getElementById('adoc-email').value;
    let strTelAdoc = document.getElementById('adoc-tel').value;
    let strEspecie = document.getElementById('especie').value;
    let strIdade = document.getElementById('idadepet').value;
    let strRaca = document.getElementById('raca').value;
    let strEndereco = document.getElementById('endereco-adoc').value;

    let novaAdoc = {
      carac: strCaracAdoc,
      especie: strEspecie,
      idadepet: strIdade,
      raca: strRaca,
      enderecoAdoc: strEndereco,
      emailAd: strEmailAdoc,
      telAd: strTelAdoc,
      fotoAd: base64Image
    };

    objDadosAdoc.petAdoc.push(novaAdoc);
    salvaDadosAdoc(objDadosAdoc);

  }

  // botão enviar

  const formAdoc = document.getElementById("formAdoc"); // id do form
  const fileInput = document.getElementById("enviar-arquivoAd"); // input type file

  formAdoc.addEventListener('submit', (e) => {
    
    
    if (document.getElementById('carac-adocao').value == "" || document.getElementById('adoc-email').value == "" || document.getElementById('adoc-tel').value == "" || document.getElementById('especie').value == "" || document.getElementById('idadepet').value == "" || document.getElementById('endereco-adoc').value == "") {
      alert("Preencha todos os campos obrigatórios!");
      e.preventDefault();
      return;
    }
    else{
      alert("Enviado!");
    }

    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64Image = event.target.result;
        incluirAdoc(base64Image);
      }
      reader.readAsDataURL(file);
    } else {
      alert('Por favor, selecione uma imagem para fazer upload.');
    }
  });

});





