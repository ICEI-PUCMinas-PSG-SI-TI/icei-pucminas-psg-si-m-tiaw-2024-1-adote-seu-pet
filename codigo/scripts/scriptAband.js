//  ** DENÚNCIAS ABANDONO **

document.addEventListener("DOMContentLoaded", function () {

  function leDadosDen() {
    let strDados = localStorage.getItem('db');
    let objDadosDen = {};

    if (strDados) {
      objDadosDen = JSON.parse(strDados);
    } else {
      objDadosDen = {
        lastId: 1, 
        petAband: [{
          id: 1, 
          info: "Cachorro encontrado na rua",
          telAband: "3345-8795",
          emailAband: "renata45@gmail.com",
          fotoAband: "https://blog.cobasi.com.br/wp-content/uploads/2021/08/AdobeStock_413016961.webp"
        }]
      };
    }
    return objDadosDen;
  }

  function salvaDadosDen(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
  }

  function incluirDen(base64Image = '') {
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
      fotoAband: base64Image
    };

    objDadosDen.petAband.push(novaDen);
    salvaDadosDen(objDadosDen);

    imprimeDen();
  }

  const formDenunc = document.getElementById("formDenunc");
  const fileInput = document.getElementById("enviar-arquivoD");

  formDenunc.addEventListener('submit', (e) => {
    
    if (document.getElementById('text-aband').value === "" || document.getElementById('denunc-email').value === "" || document.getElementById('denunc-tel').value === "") {
      e.preventDefault(); 
      alert("Preencha todos os campos!");
      return;
    } else {
      alert("Enviado!");
    }

    const file = fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64Image = event.target.result;
        incluirDen(base64Image);
      }
      reader.readAsDataURL(file);
    } else {
      incluirDen();
    }
  });

});





