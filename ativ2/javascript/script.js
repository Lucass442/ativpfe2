function validar(){

    const idade = document.getElementById('idade').value;
    const nivel = document.getElementById('nivel').value;
    const msg = document.getElementById('mensagem');


    if (idade >= 16 && nivel > 5){
        msg.innerText = "Inscrição aceita: Categoria PRO";
        msg.style.color = "green";
    } else if (idade >= 16 && nivel <= 5){
        msg.innerText = "Inscrição aceita: Categoria iniciante";
        msg.style.color = "blue";
    } else {
        msg.innerText = "Inscrição recusada: Idade mínima 16 anos";
        msg.style.color = "red";
    }
}

function validarSenha() {
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;
    const msgSenha = document.getElementById('mensagem2');

    if (senha.length < 8) {
        msgSenha.innerText = "A senha deve conter no mínimo 8 caracteres.";
        msgSenha.style.color = "red";
    } else if (senha !== confirmaSenha) {
        msgSenha.innerText = "As senhas não coincidem.";
        msgSenha.style.color = "red";
    } else {
        msgSenha.innerText = "Senhas coincidem!";
        msgSenha.style.color = "green";
    }
}

function validarDesconto() {
    const idade2 = document.getElementById('idade2').value;
    const rm = document.getElementById('rm').value;
    const msgDesconto = document.getElementById('mensagem3');

    if (idade2 >= 60 || rm > 0000 && rm < 9999) {
        msgDesconto.innerText = "Desconto aplicado!";
        msgDesconto.style.color = "green";
    } else {
        msgDesconto.innerText = "Desconto não aplicado.";
        msgDesconto.style.color = "red";
    }
}

function validarUsuario() {
    const nome = document.getElementById('nome-usuario').value;
    const idade = document.getElementById('idade-usuario').value;
    const msgUsuario = document.getElementById('mensagem4');

    if (nome.length < 1 || idade < 0) {
        msgUsuario.innerText = "Nome e idade são obrigatórios.";
        msgUsuario.style.color = "red";
    } else {
        msgUsuario.innerText = "Usuário válido!";
        msgUsuario.style.color = "green";
    }
}
