let arr = [45,2,94,41,35,21,25,66,47,353,6,89,88,34,0]

//! Mostrar Numeros Pares e Impares
function mostrarPares(par){
    let pares = []
    let inpares = []
    for(let i = 0; i < par.length; i++){
        if(arr[i] % 2 === 0){
            pares.push(par[i])
        }
        else {
            inpares.push(par[i])
        }
    }
    return {
        "Pares": pares,
        "Inpares": inpares,
        "Cantidad de Numeros": par.length,
        "Cantidad de Pares": pares.length,
        "Cantidad de Inpares": inpares.length
    }
}

//! Mostrar Numeros Mayores/Menores a 10
function filtrar(par, filtro){
    let mayoresA = []
    let menoresA = []
    let filtrarMayorADiez = par.filter( (par) => {
        return par >= filtro
    })
    let filtrarMenorADiez = par.filter( (par) => {
        return par <= filtro
    })
    mayoresA.push(...filtrarMayorADiez)
    menoresA.push(...filtrarMenorADiez)
    return {
        'Filtro': filtro,
        'Menores:': menoresA,
        'Mayores:': mayoresA
    }
}
console.log(filtrar(arr,10))
console.log(filtrar(arr,50))

//! Obtener Suma de Todo el Array
function sumaTotal(par){
    let total = par.reduce( (acum, sum) => {
        return acum + sum
    })
    return `La suma total es: ${total}`
}

//! Multiplicar Cada Item del Array x2
function multiplicarX2(par){
    let mX2 = par.map( par => par * 2)
    return mX2
}

//! Potencia
function potecia(par, pot){
    return par ** pot
}

