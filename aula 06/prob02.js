function maiorNumero(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior que ${b}.`);
    } else if (b > a) {
        console.log(`O número ${b} é maior que ${a}.`);
    } else {
        console.log("Os dois números são iguais.");
    }
}

maiorNumero(5, 2);  
maiorNumero(2, 5);  
maiorNumero(5, 5); 
