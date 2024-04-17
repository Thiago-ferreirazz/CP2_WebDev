// Função para verificar a idade
function checkAge() {
    var isOver18 = confirm("Você tem mais de 18 anos?");
    if (isOver18) {
        showHomePage();
    } else {
        window.location.href = "https://vaganacreche.sme.prefeitura.sp.gov.br/";
    }
}

// Lógica para exibir página de login
document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "1234" && password === "1234") {
        alert("Login bem-sucedido!");
        // Redirecionar para a página do usuário logado
    } else {
        alert("Usuário ou senha incorretos!");
    }
});


