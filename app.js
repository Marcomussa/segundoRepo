let arr = [45,2,94,41,35,21,25,66,47,353,6,89,88,34]

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
function filtrar(par){
    let mayoresADiez = []
    let menoresADiez = []
    let filtrarMayorADiez = par.filter( (par) => {
        return par >= 10
    })
    let filtrarMenorADiez = par.filter( (par) => {
        return par <= 10
    })
    mayoresADiez.push(...filtrarMayorADiez)
    menoresADiez.push(...filtrarMenorADiez)
    return {
        'Menores a 10:': menoresADiez,
        'Mayores a 10:': mayoresADiez
    }
}

console.log(filtrar(arr))