document.addEventListener("DOMContentLoaded", function(){

    var textos = [
         {txt1: "As Organizações Não Governamentais (ONGs) são entidades que não recebem nenhum tipo de auxílio financeiro do governo, ou seja, não atuam com fins lucrativos. Assim, as pessoas que formam as instituições trabalham de forma voluntária em defesa de uma causa, seja ela direitos humanos,  proteção ambiental, direitos dos animais, etc. As ONGs de animais são mantidas e operadas com base em doações, eventos beneficentes e trabalho voluntário, com a missão de resgatar os animais em situação de maus-tratos e abandono para tratar, cuidar e direcionar para o processo de adoção. Dessa maneira, os bichinhos poderão encontrar um lar seguro que ofereça o amor de que precisam e merecem. <br>  As ONGs ou os protetores independentes podem ser a única chance que os animais têm de sobreviver, receber os cuidados necessários e viver com dignidade, carinho e amor, para que não sejam abandonados ou mal tratados novamente. São os voluntários que lutam pelos direitos desses bichinhos indefesos e que estão sempre  dispostos a ajudar, proteger e valorizar a vida dos animais."}, 
         {txt2: "Os animais de estimação já conquistaram uma grande relevância na vida do ser humano,  especialmente devido aos benefícios que trazem aos seus tutores. O convívio com cães e gatos  pode ajudar a reduzir o estresse, controlar a ansiedade, melhorar quadros de depressão, entre outros benefícios. Esse estreitamento de laços trouxe também riscos à saúde para ambos os lados, levando a relação dos humanos com os pets ser extremamente relevante para a Saúde Pública. Isso  porque existem diversas doenças e infecções que podem ocorrer nessa relação humano-animal, seja  no contato direto com os cães e gatos ou através do meio ambiente em que convivem, incluindo os  vetores (pulgas, carrapatos e pernilongos) e reservatórios (animais ou pessoas) envolvidos na cadeia de transmissão. Essas doenças são conhecidas como Zoonoses. Entre as zoonoses mais importantes transmitidas por cães e gatos devemos destacar: a raiva, a leishmaniose, a leptospirose, a toxoplasmose, a escabiose e as verminoses."},
         {txt3: "O adestramento é um processo educacional que visa melhorar a comunicação entre o cão e o tutor. Segundo Manara Martins, adestradora e fundadora da Alternativa Pet Adestramento, são utilizadas técnicas que ensinam o animal a “associar comandos, gestos e marcadores pelos comportamentos que desejamos modelar e executar”.  Nele, o cachorro aprende, por exemplo, a executar tarefas, a respeitar limites e a obedecer ao tutor. “O adestramento é realizado não só para trabalhar problemas de comportamento, mas também para ensinar o cão como que nós, humanos, gostaríamos que ele se comportasse em diferentes situações”, afirma Camila Hermes, médica veterinária e adestradora. <br>Se você tem vontade de ensinar alguns comandos básicos para o seu animal, saiba que é possível. No início, é importante “o cão estar interessado na recompensa e focado no que o tutor tem a oferecer”. Por isso, é fundamental conhecer o animal e entender o que funciona para ele como recompensa, pois é algo que o deixará motivado.  Na internet, é possível encontrar alguns tutoriais de como ensinar comandos básicos aos pets. No canal do YouTube e no perfil do Instagram da médica veterinária e adestradora Camila Hermes, por exemplo, você encontra algumas dicas para treinar o seu animal em casa. "}
    
 
     ]
     
     var btn1 = document.getElementById('btnTema1');
     var btn2 = document.getElementById('btnTema2');
     var btn3 = document.getElementById('btnTema3');
 
 
     function mostraTxt(){
         let divDoTexto = document.getElementById('incorporaNovoTexto1')
             divDoTexto.classList.toggle('hide');
     }
 //
     function mostraTxtDois(){
         let divDoTexto = document.getElementById('incorporaNovoTexto2')
 
         divDoTexto.classList.toggle('hide');
     }
 //
     function mostraTxtTres(){
         let divDoTexto = document.getElementById('incorporaNovoTexto3')
 
         divDoTexto.classList.toggle('hide');
     }
 
 //
 
     btn1.addEventListener('click', function(){
         mostraTxt();
     })
     btn2.addEventListener('click', function(){
         mostraTxtDois();
     })
     btn3.addEventListener('click', function(){
         mostraTxtTres();
     })
 
     
 })