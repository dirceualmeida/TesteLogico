// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function method5(array5, number1, number2) {
    const newArray5 = array5.filter(newarray => newarray !== number1 && newarray !== number2)

    console.log(newArray5)
    return newArray5;
}

method5([5,4,3,2,5], 5,3)