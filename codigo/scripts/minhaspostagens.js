document.addEventListener("DOMContentLoaded", function() {

    function leDadosDenj() {
        let strDados = localStorage.getItem('db');
        let objDadosDen = {};

        if (strDados) {
            objDadosDen = JSON.parse(strDados);
        } else {
            objDadosDen = {
                petAband: [
                    {
                        "id": 1,
                        "info": "Cachorro encontrado na rua",
                        "telAband": "3345-8795",
                        "emailAband": "renata45@gmail.com",
                        "fotoAband": "https://blog.cobasi.com.br/wp-content/uploads/2021/08/AdobeStock_413016961.webp",
                        "autor": "Renata Campos"
                    },
                    {
                        "id": 2,
                        "info": "Gato abandonado em frente à escola",
                        "telAband": "3345-8796",
                        "emailAband": "marcos23@gmail.com",
                        "fotoAband": "https://pbs.twimg.com/media/FN6lMZ5XEAUGRcs?format=jpg&name=large",
                        "autor": "Marcos Silva"
                    },
                    {
                        "id": 3,
                        "info": "Cachorro encontrado no parque",
                        "telAband": "3345-8797",
                        "emailAband": "ana89@gmail.com",
                        "fotoAband": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrg4EIy_QoXLKzcRsae0GcJ8pd7lf8QhVmaQ&s",
                        "autor": "Ana Oliveira"
                    }
                ]
            };
            localStorage.setItem('db', JSON.stringify(objDadosDen));
        }

        return objDadosDen.petAband;
    }

    var postagens = leDadosDenj();

    var container = document.getElementById('postagens-container');

    postagens.forEach(function(post) {
        var card = document.createElement('div');
        card.className = 'col-sm-12 col-md-6 col-lg-3 d-flex align-items-stretch';
        card.innerHTML = `
            <div class="card">
                <img src="${post.fotoAband}" class="card-img-top" alt="Imagem do Pet">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${post.info}</h5>
                    <p class="card-text">Telefone para contato: ${post.telAband}</p>
                    <p class="card-text">Email para contato: ${post.emailAband}</p>
                 <a href="../pages/minhasdenuncias.html">   <button type="button" class="btn btn-custom btnDetalhes"> Ver Detalhes</button> </a>
                </div>
            </div>
        `;

        container.appendChild(card); 
    });
});

