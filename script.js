function realizarSorteio() {
    // Lista de times
    var times = ["Borussia Dortmund", "Real Madrid"];

    // Gera um número aleatório entre 0 e 1
    var indice = Math.floor(Math.random() * times.length);

    // Seleciona o elemento de resultado
    var resultadoElement = document.getElementById("resultado");

    // Exibe o time sorteado na página
    resultadoElement.innerText = "O time sorteado é: " + times[indice];
    
    // Remove classes de estilo anteriores
    resultadoElement.classList.remove("borussia", "real-madrid");

    // Adiciona classe de estilo com base no time sorteado
    if (times[indice] === "Borussia Dortmund") {
        resultadoElement.classList.add("borussia");
    } else if (times[indice] === "Real Madrid") {
        resultadoElement.classList.add("real-madrid");
    }
}
