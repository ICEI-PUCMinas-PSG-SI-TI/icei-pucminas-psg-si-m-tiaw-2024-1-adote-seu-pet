document.addEventListener("DOMContentLoaded", () => {

    let lastUserId = parseInt(localStorage.getItem('lastUserId')) || 0;

    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function (event) {
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

            // Verifica se o email já está cadastrado
            if (localStorage.getItem(email)) {
                alert("Este email já está cadastrado.");
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
            window.location.href = "login.html";
        });
    }

    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
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

            // Armazena o usuário logado no localStorage
            localStorage.setItem('loggedInUser', email);

            alert("Login bem-sucedido!");
            window.location.href = "encontreumPet.html";
        });
    }

});

/*  Função para obter o usuário logado

    function getLoggedInUser() {
        const loggedInUserEmail = localStorage.getItem('loggedInUser');
        if (loggedInUserEmail) {
            return JSON.parse(localStorage.getItem(loggedInUserEmail));
        }
        return null;
    }

    Exemplo de uso da função getLoggedInUser em outra página

document.addEventListener("DOMContentLoaded", function() {
    const user = getLoggedInUser();
    if (user) {
        console.log("Usuário logado:", user);
    } else {
        console.log("Nenhum usuário logado.");
    }
});

*/
