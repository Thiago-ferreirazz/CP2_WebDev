// Página inicial
var idade = prompt("Você tem mais de 18 anos? (sim/nao)");

if (idade.toLowerCase() === "nao") {
    // Redireciona para esse link
    window.location.href = "https://lojadodivo.com/products/jm-bolsonaro-eau-de-pertum";
} else {
    // Redireciona para pagina principal
    window.location.href = "/home.html";
}