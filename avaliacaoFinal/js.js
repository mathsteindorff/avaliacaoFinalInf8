function validarInput() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nome === "") {
        alert("Por favor, preencha o campo de Nome.");
    }
    else if (email ===""){
        alert("Por favor, preencha o campo de E-mail")
    }
    else if(!emailRegex.test(email)){
        alert("Por favor, insira um endereço de e-mail válido."); 
    }
    else{
        alert("Enviado com sucesso!")
    }

}