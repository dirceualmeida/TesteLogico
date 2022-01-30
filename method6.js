// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function method6(array6) {
    const newArray6 = [];

    for (unique of array6) {
        if (newArray6.indexOf(unique) === -1){
            newArray6.push(unique);
        }
    }

    console.log(newArray6);
    return newArray6;
}

method6([1,2,3,3,2,4,5,4,7,3])