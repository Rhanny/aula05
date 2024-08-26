function verificarLimiteCaracteres(str) {
    const limite = 20;
    const comprimento = str.length;

    if (comprimento > limite) {
        console.log("O limite de caracteres foi excedido.");
    } else if (comprimento === limite) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}

// Exemplo de uso
verificarLimiteCaracteres("Este é um exemplo de string");  // "O limite de caracteres ainda não foi excedido..."
verificarLimiteCaracteres("Este é um exemplo de string com mais de vinte caracteres"); // "O limite de caracteres foi excedido."
