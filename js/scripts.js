function play(playerChoice) {
    const choices = ["pedra", "papel", "tesoura"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = `Empate! Você e o computador escolheram ${playerChoice}.`;
    } else if (
        (playerChoice === "pedra" && computerChoice === "tesoura") ||
        (playerChoice === "papel" && computerChoice === "pedra") ||
        (playerChoice === "tesoura" && computerChoice === "papel")
    ) {
        result = `Você venceu! O computador escolheu ${computerChoice}.`;
    } else {
        result = `Você perdeu! O computador escolheu ${computerChoice}.`;
    }

    document.getElementById("result").innerText = result;  // Exibe o resultado
}

// Adiciona eventos aos botões
document.getElementById("btn-pedra").addEventListener("click", () => play("pedra"));
document.getElementById("btn-papel").addEventListener("click", () => play("papel"));
document.getElementById("btn-tesoura").addEventListener("click", () => play("tesoura"));
