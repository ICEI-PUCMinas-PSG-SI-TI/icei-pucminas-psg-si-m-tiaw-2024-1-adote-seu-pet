//  ** DENÚNCIAS DE ABANDONO IMPRESSÃO **

document.addEventListener("DOMContentLoaded", function () {

  function leDadosDen() {
    let strDados = localStorage.getItem('db');
    let objDadosDen = {};

    if (strDados) {
      objDadosDen = JSON.parse(strDados);
    }
    else {
      objDadosDen = {
        lastId: 1, 
        petAband: [{
          id: 1, 
          info: "Cachorro encontrado na rua",
          telAband: "3345-8795",
          emailAband: "renata45@gmail.com",
          fotoAband: "https://blog.cobasi.com.br/wp-content/uploads/2021/08/AdobeStock_413016961.webp",
          autor: "Renata Campos"
        }]
      };
    }
    return objDadosDen;
  }

  function salvaDadosDen(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
  }

  function imprimeDen() {
    let tela = document.getElementById('divDenuncias');
    let objDadosDen = leDadosDen();
    for (let i = 0; i < objDadosDen.petAband.length; i++) {
      let novaDen = document.createElement('div');
      novaDen.classList.add('novaden');
      novaDen.innerHTML = `${objDadosDen.petAband[i].fotoAband ? `<img src="${objDadosDen.petAband[i].fotoAband}" alt="Foto do Pet" width="200">` : '<div class="semFtDen p-1 bg-dark-subtle"><p>Imagem não enviada pelo usuário.</p></div>'} <p>${objDadosDen.petAband[i].info}</p>`;
      let btnDetalhesDen = document.createElement('button');
      btnDetalhesDen.innerHTML = `<a href="../pages/perfilDetalhadoDEN.html?id=${objDadosDen.petAband[i].id}">Ver detalhes</a>`;
      btnDetalhesDen.classList.add('btnDetalhes');
      novaDen.appendChild(btnDetalhesDen);
      tela.appendChild(novaDen);
    }
  }

  function getLoggedInUser() {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (loggedInUserEmail) {
      return JSON.parse(localStorage.getItem(loggedInUserEmail));
    }
    return null;
  }
  
  const user = getLoggedInUser();
  if (user) {
    console.log("Usuário logado:", user.nome);
  } 

  function incluirDen(base64Image) {
    let objDadosDen = leDadosDen();
    let strInfo = document.getElementById('text-aband').value;
    let strEmailDen = document.getElementById('denunc-email').value;
    let strTelDen = document.getElementById('denunc-tel').value;

    objDadosDen.lastId += 1; 
    let newId = objDadosDen.lastId; 

    let novaDen = {
      id: newId,
      info: strInfo,
      telAband: strTelDen,
      emailAband: strEmailDen,
      fotoAband: base64Image,
      autor: user.nome
    };

    objDadosDen.petAband.push(novaDen);
    salvaDadosDen(objDadosDen);

    imprimeDen();
  }

  
  imprimeDen();
});





