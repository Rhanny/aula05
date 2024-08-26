function calcularDesconto(valorTotal) {
    const desconto = valorTotal > 200 ? valorTotal * 0.10 : 0;
    const valorComDesconto = valorTotal - desconto;

    if (desconto > 0) {
        console.log(`O valor total do pedido com desconto é de R$ ${valorComDesconto.toFixed(2)}, onde o desconto aplicado foi de R$ ${desconto.toFixed(2)}.`);
    } else {
        console.log(`O valor total do pedido é de R$ ${valorTotal.toFixed(2)}.`);
    }
}

calcularDesconto(250); 
calcularDesconto(150);  
