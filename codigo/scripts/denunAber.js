var db_usuarios = [{
    user0: "Pedro Vaccaro",
    fotoPerf: "",
    id:"0"
}]


var Cadastro = [{
    carac: "Filhote de yorkshire, muito dócil, macho, porte pequeno abandona pela região da Pampulha, próximo da academia Smart fit unidade Portugal.",
           
            fotoDenun: "https://www.petz.com.br/blog//wp-content/uploads/2020/03/cachorro-de-rua-pet.jpg" 
        }]
function ExibirCadastro () {
    var textoHTML = '';
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `${Cadastro[x].carac}`;
         };
    var tela = document.getElementById('carac');
    tela.innerHTML = textoHTML;
    
    for (let x=0; x < Cadastro.length;x++) {
        textoHTML += `${Cadastro[x].fotoDenun}`;
         };
    var tela = document.getElementById('descdenun');
    tela.innerHTML = textoHTML;
   
}   


document.getElementById("editarCadastro").addEventListener("click", function() {
    // Solicite as novas informações do usuário
    var novaDescricao = prompt("Digite a nova descrição do pet:");
    var novaFoto = prompt("Digite a nova URL da foto:");

    // Atualize as informações do cadastro com os novos valores
    Cadastro[0].carac = novaDescricao;
    Cadastro[0].fotoDenun = novaFoto;

    // Exiba as informações atualizadas
    ExibirCadastro();
});