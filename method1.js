// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function method1(number1, letter1) {
    const letterArray1 = []
    for (i = 1; i <= number1; i++) {
        letterArray1.push(letter1);
    }

    console.log(letterArray1)
    return letterArray1;
}

method1(3, 'a')