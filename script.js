function validarFormulario() {
    // Seleciona os campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmaSenha = document.getElementById("confirmaSenha").value.trim();

    // Seleciona os elementos de erro
    const erroNome = document.getElementById("erro-nome");
    const erroEmail = document.getElementById("erro-email");
    const erroSenha = document.getElementById("erro-senha");
    const erroConfirmaSenha = document.getElementById("erro-confirmaSenha");

    // Reseta mensagens de erro
    erroNome.classList.remove("ativo");
    erroEmail.classList.remove("ativo");
    erroSenha.classList.remove("ativo");
    erroConfirmaSenha.classList.remove("ativo");

    let valido = true;

    // Validação do nome
    if (nome === "") {
        erroNome.textContent = "O nome é obrigatório.";
        erroNome.classList.add("ativo");
        valido = false;
    }

    // Validação do email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        erroEmail.textContent = "O email é obrigatório.";
        erroEmail.classList.add("ativo");
        valido = false;
    } else if (!regexEmail.test(email)) {
        erroEmail.textContent = "Digite um email válido.";
        erroEmail.classList.add("ativo");
        valido = false;
    }

    // Validação da senha
    if (senha === "") {
        erroSenha.textContent = "A senha é obrigatória.";
        erroSenha.classList.add("ativo");
        valido = false;
    } else if (senha.length < 6) {
        erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres.";
        erroSenha.classList.add("ativo");
        valido = false;
    }

    // Validação da confirmação de senha
    if (confirmaSenha === "") {
        erroConfirmaSenha.textContent = "A confirmação de senha é obrigatória.";
        erroConfirmaSenha.classList.add("ativo");
        valido = false;
    } else if (confirmaSenha !== senha) {
        erroConfirmaSenha.textContent = "As senhas não coincidem.";
        erroConfirmaSenha.classList.add("ativo");
        valido = false;
    }

    // Se todos os campos forem válidos
    if (valido) {
        alert("Cadastro realizado com sucesso!");
        document.getElementById("cadastroForm").reset();
    }
}