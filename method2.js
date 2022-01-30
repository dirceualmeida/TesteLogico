// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function method2(){
    const numbers2 = [1,2,3,4];
    const newArray2 = [];

    for (i = numbers2.length - 1; i >= 0; i--) {
        newArray2.push(numbers2[i])
    }

    console.log(newArray2)
    return newArray2;
}

method2()