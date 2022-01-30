// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function method9(array9, number9) {
    const newArray9 = new Array(Math.ceil(array9.length / number9)).fill().map(
        _=> array9.splice(0, number9)
    )

    console.log(newArray9);
    return newArray9;
}

method9([1, 2, 3, 4, 5], 2)