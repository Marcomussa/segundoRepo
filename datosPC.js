//! Modulo de Node
const os = require('os') 

//! Obtener Datos de la PC Mediante el Modulo de Node 'os'
let memLibre = os.totalmem()
let memLibreGB = (memLibre / 100000000).toFixed(2)
let arqCPU = os.arch()
let info = os.cpus()
let dir = os.homedir()
let network = os.networkInterfaces()
let host = os.hostname()
let loadAvg = os.loadavg()
let platform = os.platform()
let version = os.release()

//! Funcion Que Muestra Datos de la PC
function datosPC(){
    return {
        'Memoria Libre:': (memLibre / 100000000).toFixed(2) + ' GB',
        'Arq:': arqCPU,
        'Modelo:': info[0].model,
        'Velocidad:': info[0].speed,
        'cd Actual:': dir,
        'Host:': host,
        'Load Avg:': loadAvg,
        'Plataforma:': platform.toUpperCase(),
        'V:': version
    }
}

console.log(datosPC())