function verificarLimiteCaracteres(str) {
    const limite = 20;
    if (str.length > limite) {
        console.log("O limite de caracteres foi excedido.");
    } else if (str.length === limite) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}

verificarLimiteCaracteres("Este é um exemplo");
verificarLimiteCaracteres("Este é um exemplo de string com mais de vinte caracteres");
