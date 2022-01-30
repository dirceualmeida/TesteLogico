// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function method8() {
    const array8 = [1, 2, [3], [4, 5]];
    const response8 = array8.flat()

    console.log(response8);
    return response8;
}

method8()