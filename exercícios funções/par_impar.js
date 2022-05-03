function parimpar(n) {
    if (n % 2 == 0) {
        return `Par!`
    }
    else {
        return `Impar!`
    }
}
//podemos armazenar o resultado da função em uma variável e mostrá-la:

/*let res = parimpar(5)
console.log(res)*/

//podemos apenas mostrar o resultado da função direto:
console.log(parimpar(4))