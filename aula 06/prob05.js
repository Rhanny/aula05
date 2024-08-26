function verificarLimiteCaracteres(str) {
    const comprimento = str.length;

    if (comprimento > 20) {
        console.log("O limite de caracteres foi excedido.");
    } else if (comprimento === 20) {
        console.log("Você atingiu o limite de caracteres.");
    } else {
        console.log("O limite de caracteres ainda não foi excedido...");
    }
}

verificarLimiteCaracteres("é um exemplo no limite");
verificarLimiteCaracteres("Me chamo Rhannya ######")
verificarLimiteCaracteres("Este é um exemplo de string com mais de vinte caracteres"); 
