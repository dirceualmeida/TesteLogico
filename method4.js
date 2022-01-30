// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function method4() {
    const arrayOfArrays4 = [["c",2],["d",4]];

    const newArray4 = Object.fromEntries(arrayOfArrays4);

    console.log(newArray4)
    return newArray4
}

method4()