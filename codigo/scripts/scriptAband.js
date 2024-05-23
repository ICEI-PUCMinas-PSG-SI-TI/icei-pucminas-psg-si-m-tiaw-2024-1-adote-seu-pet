

//  ** DENÚNCIAS ABANDONO **

document.addEventListener("DOMContentLoaded", function () {


  function leDadosDen() {
    let strDados = localStorage.getItem('db');
    let objDadosDen = {};

    if (strDados) {
      objDadosDen = JSON.parse(strDados);
    }
    else {
      objDadosDen = {
        petAband: [{
          info: "Cachorro encontrado na rua",
          telAband: "3345-8795",
          emailAband: "renata45@gmail.com",
          fotoAband: ''
        }
        ]
      }
    }
    return objDadosDen;
  }

  function salvaDadosDen(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
  }


  function incluirDen() {
    let objDadosDen = leDadosDen();
    let strInfo = document.getElementById('text-aband').value;
    let strEmailDen = document.getElementById('denunc-email').value;
    let strTelDen = document.getElementById('denunc-tel').value;
    let strFoto = document.getElementById('enviar-arquivoD').value;

    // como incluir a imagem enviada pelo usuario?
    let novaDen = {
      info: strInfo,
      telAband: strTelDen,
      emailAband: strEmailDen,
      fotoAband: strFoto
    };

    objDadosDen.petAband.push(novaDen);
    salvaDadosDen(objDadosDen);

    imprimeDen();

  }

  function imprimeDen() {
    let tela = document.getElementById('divDenuncias');
    let objDadosDen = leDadosDen();
    for (i = 0; i < objDadosDen.petAband.length; i++) {
      let novaDen = document.createElement('div');
      novaDen.classList.add('novaden');

      //let fotoPet = document.createElement('img');
     // fotoPet.setAttribute("id", "fotopet");
     // fotoPet.setAttribute("src", "");
     // novaDen.appendChild(fotoPet);

      novaDen.innerHTML = `<p>${objDadosDen.petAband[i].info}</p>`;
      let btnDetalhesDen = document.createElement('button');
      btnDetalhesDen.innerHTML = '<a href="#">Ver detalhes</a>';
      btnDetalhesDen.classList.add('btnDetalhes');
      novaDen.appendChild(btnDetalhesDen);
      tela.appendChild(novaDen);
    }

  }

 // botão enviar
  let strInfo = document.getElementById('text-aband');
  let strEmailDen = document.getElementById('denunc-email');
  let strTelDen = document.getElementById('denunc-tel');

  var formDenunc = document.getElementById("formDenunc");

  formDenunc.addEventListener('submit', (e) => {

    if (strInfo.value == "" || strEmailDen.value == "" || strTelDen.value == "") {
      alert("Preencha todos os campos!");
      e.preventDefault();
      return;
    }
    
    else{
      alert("Enviado!");
      incluirDen();
    }
  })


})





