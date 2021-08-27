let arr = [45,2,94,41,35,21,25,66,47,353,6,89,88,34]

//! Mostrar Numeros Pares
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

console.log(mostrarPares(arr))
