// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function method7 (array1, array2) {
    const response7 = array1.length == array2.length && array1.every(function(value, index) {
        return value === array2[index];
    })

    console.log(response7);
    return response7;
}

method7([1,2,3,4], [1,2,3,4])