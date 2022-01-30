// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function method3() {
    const number3 = [1,2,'',undefined];
    const newArray3 = number3.filter(number => number >= 1);

    console.log(newArray3);
    return newArray3;
}

method3()