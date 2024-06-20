var db_usuarios = [{
    user0: "Pedro Vaccaro",
    fotoPerf: ""
}]

var Cadastro = [{
    carac: "Filhote de yorkshire, muito dócil, macho, porte pequeno.",
            especie: "Cachorro",
            idadepet: "filhote - 3 meses",
            raca: "yorkshire",
            enderecoAdoc: "bairro União",
            emailAd: "laura@gmail.com",
            telAd: "31 9874-5621",
            fotoAd: "br.png" 
        }]
function ExibirCadastro () {
    var textoHTML = '';
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `${Cadastro[x].especie}, ${Cadastro[x].raca}`;
         };
    var tela = document.getElementById('hespecie');
    tela.innerHTML = textoHTML;
    
    
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `${Cadastro[x].carac}<br>Idade: ${Cadastro[x].idadepet}<br>Local:${Cadastro[x].enderecoAdoc}`;
         };
    var tela = document.getElementById('Desc');
    tela.innerHTML = textoHTML;

    var textoHTML = '';
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `Email: ${Cadastro[x].emailAd}<br>Telefone:${Cadastro[x].telAd}`;
         };
    var tela = document.getElementById('Contates');
    tela.innerHTML = textoHTML;

   var textoHTML = '';
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `${Cadastro[x].fotoAd}`;
         };
    var tela = document.getElementById('fotopet');
    tela.innerHTML = textoHTML;
    
    var textoHTML = '';
for (let x=0; x < db_usuarios.length;x++) {
    textoHTML += `${db_usuarios[x].user0}`;
     };
var tela = document.getElementById('perfil-postado');
tela.innerHTML = textoHTML;
    
var textoHTML = '';
for (let x=0; x < db_usuarios.length;x++) {
    textoHTML += `${db_usuarios[x].fotoPerf}`;
     };
var tela = document.getElementById('ftperfil-postado');
tela.innerHTML = textoHTML;

}   