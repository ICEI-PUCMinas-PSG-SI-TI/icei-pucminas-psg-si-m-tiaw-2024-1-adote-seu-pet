
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for form submission on the registration page
    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

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

            const userData = {
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

    // Event listener for form submission on the login page
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission

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