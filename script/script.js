var compraTotal = 0 //Var de todos os vinhos
// Página de detalhes do vinho

function comprar() {
    alert("Adicionado ao carrinho com sucesso!");

    // Calculadora de preços
    var precoPorGarrafa = 70; // Preço base por garrafa
    var desconto = 0;
    // Verificar se há desconto
    var cupom = document.getElementById("cupom").value;
    if (cupom === "FIAP2024") {
        desconto = 0.1; // 10% de desconto
    }
    // Aplica o desconto e calcula o total  
    qtd = document.getElementById('qtd').value
    compraTotal += ((precoPorGarrafa * Math.abs(qtd)) - ((precoPorGarrafa * Math.abs(qtd)) * desconto)); 
    document.getElementById("total").innerHTML = "R$" + compraTotal;
}

//Printa a mensagem se o cupom for adicionado
function cupom(){
    var cupom = document.getElementById("cupom").value;
    if (cupom === "FIAP2024") {
        desconto = 0.1; // 10% de desconto
        alert("Cumpom Adicionado! Voce tem 10% de desconto.")
    }
    else{
        alert("Cumpom Invalido!")
    }
}
// Página de login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "1234" && password === "1234") {
        alert("Login bem sucedido!");
    } else {
        alert("Login inválido. Tente novamente.");
    }
}

// Sugestão de combinações de comida
function sugestaoComida(vinho) {
    var sugestoes = {
        "Cabernet Sauvignon": ["Carnes vermelhas grelhadas", "Queijos curados"],
        "Chardonnay": ["Frango assado", "Frutos do mar"],
        "Merlot": ["Massas com molho de carne", "Queijos macios"],
    };

    var listaSugestoes = sugestoes[vinho];
    document.getElementById("sugestoes").innerHTML = "Sugestões de comida: " + listaSugestoes.join(", ");
}

// Formulário de contato
function enviarMensagem() {
    alert("Mensagem enviada com sucesso!");
}
