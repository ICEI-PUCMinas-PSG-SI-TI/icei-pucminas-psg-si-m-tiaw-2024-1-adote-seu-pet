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

    }

    let objDadosDen = leDadosDen();

    let params = new URLSearchParams(location.search);
    let id = params.get('id');
   

    postagem = objDadosDen.petAband.find(function (elem) { return elem.id == id });

    if (postagem) {
        let divInfo = document.getElementById('divInfoDen');
        divInfo.innerHTML = `<p class="txtDetalhes">${postagem.info}</p> <br><br> <p class="fw-bold fs-4">Informações de contato: </p> <p class="fs-5">Telefone: ${postagem.telAband}</p> <p class="fs-5">Email: ${postagem.emailAband} </p>`;


        let divUser = document.getElementById('postadoPorDen');
        divUser.innerHTML = `<p class="ms-4 fs-5">${postagem.autor}</p> <a href="../pages/visualizar_perfil_usuario.html"> <button class="btnDetalhes text-white ms-4"> Ver perfil</button> </a>`

        var divFt = document.getElementById("divFotoDen");
        if(postagem.fotoAband){
            divFt.innerHTML = `<img src="${postagem.fotoAband}" class="imgDetalhes" alt="Foto indisponível">`;
        }
        else{
            divFt.innerHTML = `<div class="p-1 bg-dark-subtle">Imagem não enviada pelo usuário.</div>`
        }
       
    }

});