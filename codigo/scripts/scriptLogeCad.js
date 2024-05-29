document.addEventListener("DOMContentLoaded", () => {

    // Inicializando o último ID utilizado a partir do localStorage ou 0 se não houver nenhum
    let lastUserId = parseInt(localStorage.getItem('lastUserId')) || 0;

    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const nome = document.getElementById("nomeCad").value;
            const telefone = document.getElementById("telCad").value;
            const email = document.getElementById("emailCad").value;
            const senha = document.getElementById("senhaCad").value;
            const confirmSenha = document.getElementById("confirmSenhaCad").value;
            const isONG = document.getElementById("cadONG").checked;

            if (senha !== confirmSenha) {
                alert("As senhas não coincidem.");
                return;
            }

            
            lastUserId++;
            localStorage.setItem('lastUserId', lastUserId);

            const userData = {
                id: lastUserId,
                nome: nome,
                telefone: telefone,
                email: email,
                senha: senha,
                isONG: isONG
            };

            localStorage.setItem(email, JSON.stringify(userData));

            alert("Conta criada com sucesso!");
            window.location.href = "encontreumPet.html";
        });
    }

    
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const email = document.querySelector("[name='emailLog']").value;
            const senha = document.querySelector("[name='senhaLog']").value;

            const storedUserData = localStorage.getItem(email);
            if (!storedUserData) {
                alert("Usuário não encontrado.");
                return;
            }

            const userData = JSON.parse(storedUserData);
            if (userData.senha !== senha) {
                alert("Senha incorreta.");
                return;
            }

            alert("Login bem-sucedido!");
            window.location.href = "encontreumPet.html";
        });
    }
});


