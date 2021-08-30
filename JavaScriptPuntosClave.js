'use strict' // Cambia el valor de 'this'
// Siempre Se Escribe Al Final Del Codigo
// ` ` 
alert("JavaScript Comenzo y Yo Voy A Ser El Mejor Programador");
confirm() // Retorna un Booleano

//! NO VOY A BLOQUEAR EL EVENT LOOP

var camelCase
var snake_case
//! var kebab-case NO USAR

//todo: VARIABLES, Espacios de Memoria que Sirven Para Almacenar Informacion de Maner Temporal 

// CONST: Es una Constante la Cual NO Cambiara su Valor en Ningún Momento en el Futuro. Se Puede Modificar Pero NO Reasignar

// VAR: Es una Variable que SI Puede Cambiar su Valor y su Scope es Local y Global. Solo var Se Puede Reasignar

// LET: Es una Variable que También Podra Cambiar su Valor, Pero Solo Vivirá(Funcionara) en el Bloque Donde Fue Declarada. Reduce su alcance solamente en el bloque de codigo que es utilizado
var a = b = c = d = e = 'ABCDE'
var a = 'a', b = 'b'

var num // Declaracion
num = 1 // Inicializacion

/* Tipos de valores que podemos guardar en las variables:
1) Numericos;
2) Cadenas de Texto 'x'
3) Arreglos 'x'
4) Funciones
5) Booleanos
6) Objetos
*/

// --- 1)
var /*Variable*/ numero1/*Nombre*/ = 5;/*Valor*/
var numero2 = 10; 
var numero1 = 5; 
var resultado = numero1 + numero2 

document.write(resultado) /* Acceder al Doc y Escribir Cualquier Cosa */

// --- 2)
//Propiedades en Arreglos
var yeezy = 'Kanye'
var jordan = ' Jordan'

// --- 3)
var amigos = ['Carlos', 'Alex'];

// --- 4)
var saludo = function (){};

// --- 5)
var verdadero = true;
var falso = false;

//todo: OPERADORES, Hacer Operaciones y Comparaciones, Manipular el Valor de las Variables. 
//? Matematicos o Aritmeticos
10 + 15
10 - 15
10 * 15
10 / 15 // Divison
10 % 15 // Modulo
2 ** 2  // Potencia

//? Incremento y Decremento
var numero = 5;
var resultado = --numero //Se Ejecuta Al Principio
var resultado = ++numero

var resultado = numero-- //Se Ejecuta Al Final
var resultado = numero++

//? Relacionales
2 > 1   // Mayor que
1 <	2   //Menor que
2 >= 1	//Mayor o igual que
1 <= 2	//Menor o igual que 

//? Comparacion, Simple y Estricta. Siempre Retornan un Boolean
1 == 1   // Igual a
1 === 1  // Estrictamente Igual a
1 != 2   // Distinto de
1 !== 2  // Estrictamente Distinto de

//? Logicos 
(1 == 1) && (2 == 2) // Condicional AND, Conjuncion
(1 == 1) || (2 == 2) // Condicional OR, Disyuncion
!(1 == 1) // Negacion

// Asignacion:
1 += 1
1 -= 1
1 *= 1
1 /= 1

// Operador Tenario (Condicional)
let condicion = (1 === 1) ? true : false 

//! '!' Signficia ' Lo Opuesto De: '
//!True = False

var myVar = 5
myVar += 1 

//Es lo mismo que:
var myVar = 5
myVar = myVar + 1 

//Es lo mismo que:
var myVar = 5
myVar++

//!todo: ARREGLOS, Variable Que Puede Guardar Multiples Valores. Nos Permiten Generar una Coleccion de Datos. Son un Tipo Especial de Objeto
//Los Elementos Principales de un Array son su Indice y su Elemento

// Arreglo Definido
var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre']
meses[0] //Muestra El Contenido Numero 0 = Enero
meses[11] //Diciembre

//Arreglo Indefinido
var sneakers = []
sneakers[0] = 'Nike' 
sneakers[1] = 'Yeezy'

var matrizMultiDimensional = [["Bulls", 23], ["White Sox", 45]]

var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
]

//Para Acceder a 1 Seria asi:
arr[0][0]

//Para Acceder a [10,11,12] Seria asi:
arr[3][0]

//Para Acceder a 10 Seria asi:
arr[3][0][0]

// Se Puede Guardar Funciones Dentro de un Array
const array = [
    function () {
      console.log('hola')
    },
    function () {
      console.log('mundo')
    },
    function () {
      console.log('!')
    }
]
  
array[0]()
array[1]()
array[2]()

// Comparar Arrays
var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
var arr1str = JSON.stringify(arr1) // Es Necesario Convertir a String
var arr2str = JSON.stringify(arr2)
console.log(arr1str === arr2str)

//? Desestructurando Arrays
let colores = ['rojo', 'verde', 'azul']
let [rojo, verde, azul] = colores
console.log(rojo)

//todo: METODOS de Arreglos. 'Array'
//? Join, Separar Contenido Con Simbolos o Un Espaciado y lo Convierte a Cadena de Texto
var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];
meses.join(' # ')
meses.join(' ')

join('') //Convierte Array a String

//?Unshift, Agregar Un Elemento Al Principio Del Arreglo
//?Shift, Elimina El Primer Elemento Del Arreglo
meses.unshift('Mes13')
meses.shift()

//? Push, Agregar Un Elemento Al Final Del Arreglo
//? Pop, Eliminar el Ultimo Elemento Del Arreglo
meses.push('Mes13')
meses.pop()

//? Sort, Ordena de la A a la Z y de Menor a Mayor
meses.sort()

//? Reverse, Ordena de la Z a la A
meses.reverse()

//? Fill. Modifica Todo el Array Con El Parametro Asignado. 
meses.fill('enero') // Los 12 Espacios Ahora son 'enero'
meses.fill('enero', 2, 5) // Desde Donde (incluido) Hasta Donde (No Incluido) (Va a ir desde el 2 al 9)

//? Includes. Retorna un Booleano

//? Ejemplo
var articulos = [
    { nombre: 'remera', costo: 3000, tags: ['x', 'y', 'z']},
    { nombre: 'camisa',  costo: 6000, tags: ['x', 'y', 'z']},
    { nombre: 'pantalon',  costo: 9000, tags: ['x', 'y', 'z']},
]

//? Filter. Conviene Usar Cuando Tengo Que Filtrar Por Cantidad (Number). Es Como Un For y un If Combinados. Por Mas Que Encuentre El Valor Solicitado, Sigue Recorriendo el Arr. A Diferencia de Find, No Se Queda Con El Primer Valor Que Encuentre
var Filter = articulos.filter( function(parametro){ // Crea Un Nuevo Arr Eliminando los Elementos Que NO Pertenecen
  return parametro.costo > 4000
}) 

//? Map. Conviene Cuando Tengo Que Filtrar Propiedades.
var Map = articulos.map( function(parametro){ // Crea un Nuevo Array Mediante la Transformacion de Cada Elemento del Array, de Forma Individual
    return parametro.nombre 
})
  
//? ForEach. Conviene Cuando Tengo Que Iterar Para Obtener Cada Uno de Sus Elementos. Funciona = Ciclo For
var ForEach = articulos.forEach( function(parametro){
    return parametro.nombre
}) 
//? Valor (devuelve cada valor del array)
//? Index (devuelve posicion)
//? Array (devuelve el array en forma de objeto)
array.forEach(function(valor, index, array){
  console.log(valor)
  console.log(index)
  console.log(array)
})
// Ejemplo
var numeros = [2,4,6,8,10]
numeros.forEach(function(element){
    console.log(element + 2)
})

//! forEach NO Permite Guardar los Valores de las Operaciones Para Utilizarlos Mas Adelante. Realiza Operaciones Temporales. map() SI
//! MAP FILTER Y REDUCE DEBEN SER FUNCIONES PURAS
//! Si Queremos Usar Estos Metodos en Objetos Debemos Guardarlos en un Array, al Igual Que en "Ejemlo". NO Se Aplican Directamente al Objeto

//? Find. Conviene Usar Cuando Debo Buscar Por Palabras Clave. Devuelve Lo Primero Que Encuentra. 
var Find = articulos.find( function(parametro) {
    return parametro.nombre === 'remera'
}) 

//? Some. Comprueba Si Se Cumple en Alguna. Retorna True o False
var Some = articulos.some( function(parametro){
    return parametro.costo < 2000
}) 
var SomeIncludes = articulos.some(articulos => articulos.prop.includes('x')) // Si en Alguna Prop se Encuentra 'x'

//? Every/ Comprueba Si Se Cumple en Todas. Retorna True o False
var Every = articulos.every( function(parametro){ 
    return articulos.tags.includes('x') // Si en Todos los Tags se Encuentra 'x'
}) 

//? Reduce
var Reduce = articulos.reduce(reducer, 0) //Reducer = Funcion. 0 Desde Donde Inicializara. Toma Todos los Elementos de un Array y los Reduce a un Solo Valor. Evitamos la Mutacion
// No Modifican al Objeto Original. Devuelve uno Nuevo con los Articulos Filtrados. Si De Parametro se Pasa una Funcion va sin (), 
// Ejemplo
const numeros  = [2,2,2,2,2]
const reducer = (accumulator, currentValue) => accumulator + currentValue; // Funcion Reducidora
console.log(numeros.reduce(reducer)) // 10. Devuelve Un Dato Unico

//! Reduce, Map, Filter y forEach Funcionan Como Ciclos.
//! Map y Filter Siempre Retornan un Array

//todo: METODOS de Cadenas de Texto
//? Substring, Substr
nombre.substring(6, 11) //Desde Donde, Hasta Donde. 
nombre.substr(1, 6) //Desde Donde (lo corta), Cuantos Caracteres se Muestran
//Si No Colocamos un Segundo Parametro, Cortara el texto desde el parametro hasta el final

//? Replace, Remplazar Cadenas de Texto o Partes de la Cadena
var tercerNombre = nombre.replace('Marco', 'Un Capo') //Valor Inicial, Su Reemplazo

//? Split, Divide en Partes. Convierte una Cadena de Texto en un Arreglo. 
// Acepta un segundo paramatro, es "hasta donde"
var op = 'El verdadero arte es un momento fugaz de belleza que se desvanece en un instante'
op.split(' ') //Devuelve un Arreglo que cada palabra esta separada de la otra
op.split(' , ') // Si tengo cada palabra del string separada por coma y aplico eso se separa por niveles
op.split(' , ' , 2)

//? toUpperCase, Transforma el Texto en Mayusculas

//? toLowerCase

//? CharAt, Recibe como Parametro un Numero y Devuelve su Indice. "Caracter en la Posicion"

//? Trim, Elimina Espacios en Blanco al Principio y/o Final. No Recibe Parametros

//? ToFixed, El Parametro es Cuantos Numeros va a Tener en Cuenta. Devuelve un Stirng
let convertirStringANum = + (0.1 + 0.2).toFixed(2) // Con el + Se Convierte a Number

//? Repeat, Repite x Veces 

//! In JavaScript, String values are immutable, which means that they cannot be altered once created. No pasa lo mismo con los Arreglos
var myVar = 'Aello'
myVar[0] = 'H' //! No Funciona, se hace asi:
myVar = 'Hello'

//todo: METODOS de Arreglos y Cadenas de Texto
//? Lenght, Permite Conocer Cuantos Elementos Tiene Un Arreglo
var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];
meses.length // = 12

//? Slice
nombre.slice(1, 6) // Corta de 1 a 6
slice(-1) // Admite Valores Negativos como Unico Parametro. Corta del Final al Principio, osea viceversa 
slice(1) // Corta de 0 a 1

//? Concat, Juntar Variables Dentro De Una Sola Variable. Puede Recibir Multiples Parametros
var sneakers = ['Yeezy, Jordan', 'Adidas']
var marcas = ('Nike y Off-White')
var grupos = sneakers.concat(marcas)  //marcas se transforma en un Arreglo. 
var grupos_2 = marcas.concat(sneakers) //sneakers se transforma en Cadena de Texto

//? indexOf, Devuelve un Numero de Indice el cual esta Ubicado el Parametro. Si no lo encuentra devuelve -1. Sirve Para Subcadenas. Se le Puede Pasar un Segundo Parametro, el cual la iteracion comienza desde ahi. Debe ser un numero 
var lenguajes = ['c++', 'javascript', 'ruby']
lenguajes.indexOf('c++') //devuelve 0

//? lastIndexOf, Hace lo Mismo Pero Comienza del Final 

//? Search, Casi Igual que indexOf pero esta se utiliza mas para Expresiones Regulares. 

// Otras Maneras de Converir un String a Arreglo son:
Array.from(str) // Acepta un Segundo Parametro que es una Function map(). Se Ejecutara en Cada Iteracion
let ar = [...str] 

//? Convertir Numero a String
var i = 1
var c = i.toString() // Recomendada
console.log(typeof(c)) //Checkear

//Manera 2:
var d = String(i)

//Manera 3
var d = 1 + '' // '1'

//? Convertir String a Numero
var i = '2'
var e = Number(i) // Si Se Le Pasa Algo Que No Puede Convertir a Numero Devuelve NaN

//Manera 2
var d = +i

//? Convertir Num o String a Boolean
var i = 'Test'
!i // False
!!i // True

//todo: Condicionales, Evaluar Condiciones y Tomar Decisiones en Base a lo Que el Usuario Solicite
//! Utilizar el operador de igualdad: '==' , NO el de asignacion: '='
//Esta es la forma que tenemos para que nuestra pagina web tome decisiones
var edad = 18; 
if(edad > 17){
    'Mayor de Edad'
} else {
    'Menor de Edad'
}
// Si la Variable "Edad" es Mayor a 17 se Ejecuta en Pantalla "Mayor de Edad"
// Si NO se Cumple la Condicion, Se Ejecuta en Pantalla "Menos de Edad" (else {})

// ? , Operador Ternario
// Condicion ? true : false. ? Actua como If y : como Else 
i === 5 ? 'Es igual' : 'No es igual'

i === 5 ? 'Es Igual'
: (i < 5) ? 'I es mayor'
: 'I es Menor'

//? ? x2
let dobleOT = true ?? false

//? Puede Recibir Parametros
function Test(arr){
    if(arr > 1){
        console.log('ok')
    } else if(arr == 2){ //! Solo 1 else if(){} Puede Ser Verdadero
        console.log('ok')
    }
    else {
        console.log('not ok')
    }
}
Test(2)

if( (a < 0) && (b > 1)){ // Y Asi Sucesivamente
    console.log("Multiples Condicionales")
}

//? Si el Nombre de la Variable Coincide, se Muestra un Mensaje en Pantalla. 

var asia = 'japon'  //? Conviene Usar Cuando Hay Muchas Opciones. Para Comprobar, Switch Utiliza '===' (Estrictamente Igual)
switch(asia) {
    case 'japon': //! Utilizar ' : ' NO ' = '
        return 'japon'
    break; //! SUPER Importante
    case 'china':
        return 'china'
    break;
    default: //! Funciona Como 'else' 
        return 'De donde sos pa?';
    break;
}

//? Ejemplo de Uso de Switch

function EjemploSwitch(parametro){
    switch(parametro){
        case 1: 'Hola'
        break
        case 2: 'Chau'
        default: 'Buen dia'
        break
    }
}
EjemploSwitch(1) //Hola
EjemploSwitch(2) //Chau
EjemploSwitch(3) //Buen dia

//? Puede Concatenarse las Condiciones
switch(arr){
    case 1:
    case 2: 
    case 3:
        console.log(1,2,3)
    break
}

//? Condicionales Pero Sin Condicionales
const Loki = 'Loki'
const Adversario = 'Thor'
const LOKI_DISFRACES = { ironMan: 'Magneto', Thor: 'Hulk' }
const Condicional = LOKI_DISFRACES[Adversario] || Loki

//todo: Ciclo For, Estructura de Control. Se Utiliza Para Repetir Codigo
//Estructura:
for(Inicio /*Variable*/ ; Condicion/*Se Ejecuta Si se Cumple la Condicion*/ ; Actualizacion /*Variable++, Aumentar de a 1 Unidad*/){
    //Codigo
}
//The [initialization] part is executed only once (the first time).
//The [condition] is checked on every iteration.
//The [final-expression] is executed along the statement if [condition] resolves to true.

// Se Utilizan Para Recorrer Arrays

//For con Numeros
for(let i = 1 ; i < 10 ; i++) { //Aumenta de a 1. //! I++ = I + 1
    document.write(i)
}

for(let i = 10; i >= 0; i--){ //Decrece de a 1
    document.write(i);
    document.write('<br>')
}

//For con Cadenas de Texto
var meses = ['Enero', 'Julio', 'Diciembre'];
for(let i = 0 /*0 Porque Empieza Desde Ahi*/; i < meses.length /*Selecciona Todos los Meses*/; i++) {
    document.write(meses[i])
}

//Viceversa
var meses = ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' , 'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre'];
for(let i = meses.length - 1; i >= 0;  i--){
    document.write(meses[i]);
    document.write('<br>')
}

//? Forma 2; For-In
var meses = ['Enero', 'Julio', 'Diciembre'];
for(mes in meses) {
    document.write(meses[mes])
    document.write('<hr>')
}

//todo: Ciclo While, Estructura de Control. Se Utiliza Para Repetir Codigo, + Simple que For
var variable = 1;
while(condicion < 10){
    document.write(variable);
    variable = variable + 1; //variable++
}

//todo: Sentencia Break y Continue, Alterar el Comportamiento del Ciclo
//? Break Nos Permite Cortar La Ejecucion de un Ciclo Completamente
var paises = ['peru' , 'argentina' , 'colombia' , 'chile'];
for(pais in paises){
    document.write(paises[pais] + '<hr>') ;
    //Caso 1
    if(paises[pais] == 'peru'){
        break; //Se Muestra Solo Peru
    //Caso 2
    }
    if(paises[pais] == 'colombia'){
        break;   //Se Muestra Peru, Argentina y Colombia. Chile No
}
}
//? Continue Nos Permite Saltarnos a la Siguiente Ejecucion de un Ciclo
var paises = ['peru' , 'argentina' , 'colombia' , 'chile'];
for(pais in paises){
    if(paises[pais] == 'argentina')
        continue;
    document.write(paises[pais] + '<br>') 
}

//todo: Funciones, Bloques de Codigo Para Poder Reutilizar Codigo
// Debe Contener Toda la Logica Necesaria Para Cumplir Con un Objetivo Definido
//Una función puede incluir return, pero no es necesario. En el caso de que la función no tenga un return, cuando la llamas, la función procesa el código interno pero el valor devuelto es undefined. 
//Forma 0
function pais(){
    var pais = 'Argentina'
}
pais() // Ejecutar Funcion, "Llamar a la Funcion"

// Forma 1, //! Declarativa
// Se Carga Antes de Que Cualquier Codigo Sea Ejecutado
function suma(numero1, numero2){
    var resultado = numero1 + numero2;
    return resultado //!Feedback. Retorna True o False
}
var guardarValorDeParametro = suma(3,2)

//Forma 2, //! Expresiva. Funcion Anonima
// Se Carga Unicamente Cuando el Interprete Alcanza la Linea de Codigo Donde se Encuentra la Funcion
// No Hace Falta Nombrarlas Porque NO Se Reusaran
var suma = function(numero1, numero2){
    return numero1 + numero2;
}
//? Podemos llamar una función declarativa antes de ser declarada.
//? Funcion Anidada, Funciones Dentro de Otras Funciones

e.preventDefault() //No Se Enviara el Formulario Si No se Cumple la Condicion

//? Funciones Como Parametros. Se Suele Usar En Objetos. o "Callbacks". En Otras Palabras, es Cuando una Function Recibe Como Parametro Otra Funcion. Se Usan Mucho Cuando Dependemos de una Funcion Para Operar Otra
function Callback(){
    console.log('callback')
}

function llamadaCallback(fn){
    fn()
}

llamadaCallback(callback)

//? Podemos Asignar Valores Predeterminados a los Parametros Dentro de los Mismos
function Test2(par_1 = 1, par_2 = 2, par_3 = 3){
    console.log(par_1, par_2, par_3)
}
Test2() // 1, 2, 3
Test2(4,5,6) // 4,5,6
Test2(undefined, 5, 6) // 1,5,6

//? Operador de Propagacion Pasado Como Parametro, se le Llama "Rest Parameters"
function Test(...par){
    console.log(`Pasaste ${par.length} args`)
}
// Al Usarlo No Hace Falta Especificar la Cantidad de Parametros
// Podemos Hacer Uso de Map(), Filter(), Reduce() Sobre Los Params

//? Metodos de Funciones. Estos Metodos Tienen Como Objetivo Asociar un Objeto a 'this', es Decir, Cambiar el Contexto
funcion.call(obj, par) // Cambia el Contexto de 'this'. Sirve Para Relacionar una Funcion con un Objeto. 
funcion.apply(obj, [par]) // Lo Mismo Pero los Parametros Van Entre []. Sirve Mas Cuando Tenemos que Pasarle una Lista Larga de Parametros

const usandoBind = funcion.bind(obj) // Asocia Contextos. Recibe un Solo Parametro. La Funcion 'Comprende' lo que es This. BIND RETORNA UNA NUEVA FUNCION. CONVIENE GUARDARLA EN UNA VARIABLE. A Diferencia de call() y apply(), bind() NO Invoca la Funcion Instantaneamente. Una Funcion que fue Creada con bind() NO Puede Volver a Ser Enlazada a Otro Objeto.
usandoBind()
// Ejemplo:
function Test(apellido){ return console.log(`Hola soy ${this.name} ${apellido}`) }
const obj = { name: 'Marco'}

Test.call(obj, 'Mussa') ; Test.apply(obj, ['Mussa']) ; 

const usandoBind = Test.bind(obj, 'Mussa') ; usandoBind() 
const usandoBind_2 = Test.bind(obj) ; usandoBind_2('Mussa') 

//todo: Scope, es el Alcance Que Pueden Tener las Variables y las Funciones, Define Que Partes del Codigo Pueden Acceder a las Variables y Cuales No. Funcionan por Niveles. IMPORTANTE. Dicho Alcance se Define por su Ubicacion. 
// Concepto de Ambito Lexico: Una Funcion Busca Variables en el Contexto el Cual se Definio y No en el Ambito que lo Rodea

//* Hoisting: Proceso que Realiza el Engine. Las Variables y las Funciones se declaran antes de que se ejecute el codigo. Las Funciones se declaran antes que las variables, osea al principio del codigo. Cabe destacar que no es lo mismo ejecutar que declarar. Puedo ejecutar la funcion donde yo quiera, declarala no. Si o si al principio. ESTO ES IMPORTANTE. Para evitar el Hositing Debo Declarar var y func primero que todo

//* Coercion: Cambiar el tipo de valor. Implicita es sin usar un metodo, por ejemplo usando un '+' y Explicita es utilizando un metodo, ejemplo:
var a = 10 + '5' //105 String. Forma Implicita

var b = 10
String(b) //Explicita
//Viceversa
var b = '10'
Number(b)

//*Variables Locales, Solo se Puede Acceder a sus Variables Desde Dentro de su Funcion. Se Eliminan Cuando se Completa la Función.

// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}
myFunction()

//Variable Local con Funcion Anidada //? Closure: Funcion Dentro de Otra Funcion
function saludo (){
    var texto = 'Hola'; //Variable Local

    function mensaje(){ //! CLOSURE
        var texto = 'Hola 2'; //Variable Local
    }
    mensaje()
}
saludo() //? Podemos Buscar Variables Desde Dentro Hacia Afuera, Pero No Desde Afuera Hacia Dentro!

import { prototype } from 'node:events';
import { clearInterval } from 'node:timers';

//*Variables Globales, Se Puede Acceder a Estas Desde Cualquier Parte del Codigo. Estan Fueras de la Funcion Salvo Que Dentro de la Funcion se Declaren sin "var". NO Crear Variables Globales a Menos que Tenga la Intención de Hacerlo.

//* Block Scope

//* Module Scope, el Scope de una Variable va a estar Limiatado al Archivo en Donde Esta Definido
//! Se Puede Importar Todo un Script Pero NO Exportarlo Todo
import * as Script from 'scirpt.js'   // Importa Todo
Script.function() // Asi Llamamos al Codigo Si Importamos Todo el Modulo
import Script from './script.js' 
Script()
import { example as exampleRenombrado } from 'scrips.js' // Se Suelen Importar Como Objetos. 'as' Modifica el Nombre Por el Cual Accedemos a la variable, obj, etc. 

export default Exportar.js
// <script type = 'module'>

//! Proteger Codigo de Terceros, (function(){ codigo }) IIFE (No usarlo)
// A Partir de ES6 Se Utiliza let & const 
(function(){
    var pais = 'Argentina'
})() // Se llama automaticamente

//? Fecha de Hoy (actualizada)
var fecha = new Date()
var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
semana[fecha.getDay()]

fecha.getFullYear() + 'Year'
fecha.getMonth() + 1 + ' Mes'
fecha.getHours() + ' Horas'
fecha.getMinutes() + ' Minutos'
fecha.getSeconds() + ' Segundos'
fecha.getDay()

function fechaActual(){
    var fecha = new Date()
    document.getElementById('fecha').innerHTML = fecha.toLocaleDateString()
}

new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

//? Closures
function Alcancia(){
    let count = 0
    function saveMoney(coins){
        count += coins
        console.log(count)
    }
    return saveMoney
}

let guardarFuncionRetorno = Alcancia() //! Asi Guardamos la Funcion de Retorno. Es Necesario Cuando al Closure Hay que Pasarle un Parametro
guardarFuncionRetorno(2) //2
guardarFuncionRetorno(4) //4

//? Un Closure Puede ser Muy Util a la Hora de Trabajar con Diferentes Metodos Para Generar un Comportamiento en Especifico, ej:
function Test (){
    let name = 'Marco' //! Variable Privada, el valor puede cambiar a traves de funciones
    return {
        getName(){ //? Se Puede Guardar Como Propiedad; nombre: function() { return name }
            return name
        },
        setName(par){
            return `Hola ${par}`
        }
    }
}

Test().getName() // let x = Test3(), x.getName() (Es lo Mismo)
Test().setName('Marco')

//todo: Objetos. Son Variables que Pueden Contener Muchos Valores
//? Se Componen por: Clases, Objetos, Atributos, Metodos y Mensajes 
//Permiten Guardar Pares de Valores. Se Ahorra Escribir Mucho Codigo

const marco = {  //Asi es una Manera de Declarar los Objetos. //! Objeto Literal
    nombre: 'Marco',
    edad: 19,
    pais: 'Argentina',

    bio: function(){
        return this.nombre + ' tiene ' + this.edad + ' y vive en ' + this.pais
    }   
}  

marco.chau = function(){ console.log(`chau ${this.nombre}`) }
marco.chau()
marco.bio() //Se Usan los () Para Indicar un Metodo. Si NO Llevan Parentesis es una Propiedad

//? Heredar Metodos y Propiedades en Objetos Literales
const persona = {
    __proto__: marco
}

//? Objeto Anidado
var objetoAnidado = {
    'Pais y Capital': {
        'America del Sur': {
            argentina: 'buenos aires',
            uruguay: 'montevideo'
        }
    } 
}
// Ahora Usando un Constructor de Objetos
// El Constructor de Objetos Nos Permite Crear Objetos Conforme los Necesitemos.
// En Vez de Escribirlos al Inicio.
function Persona(nombre, apellido, edad){  //? Funcion Constructora y/o PROTOTIPO
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}
var yo = new persona(' Marco ', ' Mussa ', 19) //Creacion de Objetos
document.write(yo.nombre + yo.apellido + yo.edad)

var juan = new persona(' Juan ', ' Picu ', 20)
document.write(juan.nombre + juan.apellido + juan.edad)

//? A Los Constructores Puedo Agregarle Funciones: (Definirlas Debajo del Prototipo). NO Usar () => {}. Puedo Agregarlas Asi o Escribirlas Dentro de la Clase
Persona.prototype.saludar = function() { // Los Prototipos son Objetos que se Utilizan como Fuente de Propiedades Alternas
    console.log('Hola')
}
persona.saludar() // La Ejecuto

// Un Poco Mas Complejo:
Persona.prototype.mayorEdad = function(){
    this.edad > 18 ? 'Mayor' : 'Menor' 
}

//? Herencia Prototipal. Hace Referencia a la Cadena de Prototipos
// Equivalencias: 
objeto.__proto__
Object.getPrototypeOf()

//Crear Array de Objetos
var arrayObjetos = [yo, juan]

//Crear Array con Objetos
var arrayObjetos = [
    { nombre: 'marco',  apellido: 'mussa'},
    { nombre: 'juan',  apellido: 'lopez'}
]

//? Se Puede Acceder a las Propiedades de 2 Maneras; con un . y con []. 
//! Si la Propiedad Tiene Espacios se Utiliza []. 

var objeto1 = {
    'Nombre Ciudad': 'caba'
}

var accederObjeto1 = objeto1['Nombre Ciudad'] // El Parametro Debe Ser un Array
var nombreCiudad = objeto1['Nombre Ciudad']

//? Operador de Propagacion o Spread Operator: ' ...propiedad '
// Crea un Duplicado del Contenido del Objeto Para Luego Modificarlo //* Una Copia.  
// Si Se Usa Dentro de un Objeto Que Tienen Las Mismas Props, El Objeto Que Tiene el ... Posee la Jerarquia
const spreadOperator = { ...Objeto, ...Array }

// Se Puede Utilizar Para Condicionales: 
const comprobar = false
const resultado = {
    ...( comprobar ? { animal: 'gato' } : { animal: 'perro' })
}
// Puede Combinar Matrices 
// Puede Convertir String en Matrices
//! En Arrays, Copia Unicamente el Contenido

//* Metodos de Objetos
//? Comprobar Que Una Propiedad Existe
objeto.hasOwnProperty('Propiedad')

// Cuando Hay un Objeto Multidimensional Utilizar la Siguiente Sintaxis
objeto[0].hasOwnProperty('Propiedad') 

//? Freezar un objeto (no se puede modificar, crear ni eliminar propiedades)
//! Proteje los Datos de Mutaciones
Object.freeze(obj)
//? Consultar si un objeto está "freezado"
console.log(Object.isFrozen(obj))

//? Sellar un objeto (Se pueden modificar las propiedades pero no se pueden agregar ni eliminar)
Object.seal(obj);
//? Consultar si un objeto está "sellado"
console.log(Object.isSealed(obj));

//? Crear un Objeto
Object.create(prototypeObject, propertiesObject)

//? Unir 2 Objetos
const nuevoObjeto = Object.assign(obj_1, obj_2)

//? Obtener las Props y Mostrarlas en un Array
Object.keys(obj)

//? Obtener los Valores de las Props y Mostrarlas en un Array
Object.values(obj)

//? Convertir Objeto a Array
Object.entries(obj)

//* Cuando Trabajamos con Objetos y Funciones a esta Ultima se le Pueden Pasar 2 Tipos de Parametros; de Referencia y de Valor. Si Modificamos un Objeto Dentro de una Funcion Tambien se Vera Afectado Por Fuera de la Funcion o Puede Retornar un Objeto Nuevo con las Mismas Caracteristicas. 
//* Esto es si Queremos Modificar el Objeto Madre o Retornar un Nuevo Objeto Hijo. Osea, Modificar el Original o Crear uno Nuevo que Hereda Caracreristicas 

function crearNuevoObjeto(persona){
    return {
        ...persona
    }
}
const crearNuevoObjeto_2 = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

function modificarObjetoOriginal(){ //! USAR ESTA SINTAXIS
    return objeto.edad += 1
}
const modificarObjetoOriginal_2 = persona => ({
    ...persona,
    altura: persona.altura *= 100
})

const guardarNuevoObjeto = new crearNuevoObjeto(persona)

//? Comparar Objetos: 
objetoUno == objetoDos // False. SIEMPRE 
// Por mas que sean iguales, siempre va a dar false ya que ocupa otro espacio en memoria RAM
objetoUno === objetoDos // False. SIEMPRE, salvo que: 

var objetoUno = {}
var objetoDos = objetoUno
objetoUno == objetoDos // True 

//? Destructuring: No Modifica el Obj o el Array de Origen. Su Unico Objetivo es Copiar los Valores de una Manera mas Practica y Rapida
function sinDestructuring(objeto){
    objeto.prop1
    objeto.prop2
    objeto.prop3
}

function conDestructuring( {prop1, prop2, prop3} ){ 
    prop1, prop2, prop3
}
conDestructuring( OBJETO )// Recibe Como Parametro EL OBJETO

// Podemos Trabajar un Objeto Indefinido Asi:
const Yo = {}
function conDestructuring( {nombre = 'marco', apellido = 'mussa', edad = 19} ){ 
    nombre, apellido, edad
}

// En Vez de Escribir Asi:
console.log(telefono.marca, telefono.color, telefono.modelo)
// Podemos Abreviarlo Asi:
let { marca, color, modelo } = telefono
console.log(marca,color,modelo)

//? Clases. Importante. En Realidad, las Clases en JS NO Existen. Se Interpreta como un Objeto que Crea Otros Objetos
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.funcionCualquiera()
    }

    funcionCualquiera(){
        return 'Se Pueden Agregar Funciones Asi'
        this.atributo // Se Pueden Crear Atributos Asi
    }
}
const nuevaPersona = new Persona('a','b')
nuevaPersona.__proto__ // Accedes a 'Persona'

//? Heredar (Permite Heredar Propiedades de una Clase)
class Desarrollador extends Persona {
    constructor(nombre, apellido, nuevoAtributo) {
        super(nombre, apellido) //! Desarrollador Heredo los Atributos y Funciones de Persona
        this.nuevoAtributo = nuevoAtributo
    }
}

//? Palabra Reservada: NEW
new Array(10)
new Error()

//todo: Acceder a los Elementos del DOM
//? Permite Acceder y Manipular los Elementos del Documento Para Hacer Aplicaciones Web, Sitios Dinamicos, Etc

var cajas = document.getElementsByTagName('div') //Accedes a Todos los divs
var cajas = document.getElementsByClassName('caja')

var primeraCaja = document.getElementById('primera') //Mas Utilizado
primeraCaja.textContent = 'Picu'; //Forma 1 de Cambiar el Texto

cajas[1].innerHTML = '<h1> H1 </h1>' //Forma 2 Pero Con Esta Forma se Puede Aplicar Codigo HTML 

//? Creando Nodos
//Crear el Elemento
var caja = document.createElement('div')

//Dictar el Contenido
var contenido = document.createTextNode('Hola Mundo')

//Unir El Elemento con el Contenido
caja.appendChild(contenido)

//Asignarle Atributos al Elemento
caja.setAttribute('class', 'caja naranja')

//Agregar el Elemento al Documento
var contenedor = document.getElementById('contenedor')
contenedor.appendChild(caja)

//? Modificar ID % Class
// var.id = 'nombreID'
caja.id = 'caja'
caja.className = 'caja rojo'

//* Ejemplo 2

var square = document.createElement('div')
var contentSquare = document.createTextNode('Yes Indeed')

square.appendChild(contentSquare)

square.setAttribute('class', 'caja naranja') // = square.className('caja naranja')

var contenedor = document.getElementById('contenedor')
contenedor.appendChild(square)

square.className = 'caja naranja'
square.id = 'azul'

//? Conocer la Caja Padre
var padre = cajas[0].parentNode

//? Reconoce la Caja por su ID. Queremos Instertar la "azul" Antes que "Primera"
padre.insertBefore(azul, primera)

//? Reemplazar Nodos
padre.replaceChild(azul, cajas[1]) //Reemplazar un Elemento Hijo Sobre Otro

//! Eliminar Nodos
padre.removeChild(cajas[4]) //Elimina Complatamente 

//? Cambia par de tipo texto a numerico y redondea
parseInt('par') 
parseInt('1.1') // 1 (Numero)

//? Agregar Clases de CSS
classList.add('class')

//? Toggle Agrega y Quita. 
classList.toggle('class')

//? Eliminar Clases 
classList.remove()

//todo: Localstorage

localStorage.setItem('nombre', 'Mi nombre') // Inserto un dato con setItem
localStorage.curso = 'Javascript' // Inserto un dato con sintaxis de punto

var curso = localStorage.getItem('curso') // Leo un valor con getItem('clave')
var nombre = localStorage.nombre // Leo un valor con la sintaxis de punto

//todo: Sessionstorage

var nombre = sessionStorage.getItem('Nombre');
var nombre2 = sessionStorage.Nombre;

//todo: JSON. JavaScript Object Notation
var objeto = [{
	"id": 1,
	"first_name": "Ellis"
}, {
	"id": 2,
	"first_name": "Reinwald"
}, {
	"id": 3,
	"first_name": "Timmy"
}]
//Para Acceder a Cualquiera de Ellos se Utilizan []. ej: console.log(objeto[0])

//? stringify(): Acepta un objeto como parámetro, y devuelve la forma de texto JSON equivalente.
//? parse(): Recibe un texto JSON como parámetro, y devuelve el objeto JavaScript correspondiente.

//! Convierto mi variable a formato JSON (Texto plano)
var json = JSON.stringify(objeto)

//! Convertir JSON a Objeto
var objetoJson = JSON.parse(json)

//todo: Arrow Function. CUIDADO CON ESTAS FUNCIONES, THIS NO FUNCIONA IGUAL.
// Conviene usarlo cuando instanciamos metodos dentro de un constructor
objeto.forEach(function(persona) {})
//es lo mismo que:
objeto.forEach( (persona) => {})

//todo: Truthy and Falsy
//Para saber si algo es True o False podemos utilizar la siguiente Funcion: Retorna True o False
Boolean()

Boolean(0); // False
Boolean(null); // False
Boolean(NaN); // False
Boolean(undefined); // False
Boolean(false); // False
Boolean(""); // False

// Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); // True para 1 o cualquier número diferente de cero (0)
Boolean("a"); // True para cualquier caracter o espacio en blanco en el string
Boolean([]); // True aunque el array esté vacío
Boolean({}); // True aunque el objeto esté vacío
Boolean(function(){}); // Cualquier función es verdadera también

Boolean(1 === 1) // True

Boolean(1 === '1') // False

isNaN()

//todo: MATH.
// Devuelve un Entero, Redondea el Num Para Arriba
Math.ceil(3.2) // 4

// Cuando es Negativo Redondea Para el Lado del 0
Math.ceil(-3.2) // -3

// Devuelve un Entero. Redondea el Num Para Abajo
Math.floor(3.2) // = 3

// Cuando es Negativo Devuelve Uno Mas
Math.floor(-3.2) // = -4

// Ceil Sube Para Arriba Mientras que Floor Desciende. Entendelo Como Si Fueran Flechas

Math.random() // Random Entre 0 y 1

Math.min() // Devuelve el Numero mas Chico

Math.max() // Devuelve el Numero mas Grande

Math.trunc() // Devuelve Siempre el Parametro sin Comas

Math.sign() // -1 = Negativo, 0 = 0, 1 = Positivo

Math.pow() // Acepta 2 Parametros. El Primero es la Base y el Segundo la Potencia

Math.sqrt() // Raiz Cuadrada

Math.abs() // Negativo lo Convierte a Positivo

//todo: Funciones Mas Utiles
//math: https://www.w3schools.com/js/js_math.asp
//filtrar, filtra los strings menores a 6
const palabras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let filtrar = palabras.filter(palabra => palabra.length > 6)
console.log(filtrar) //No cambias el array palabras, a partir de ese creas uno nuevo pero palabras queda intacto

//! MAP (Hay un Monton, INVESTIGAR!)
//! MATH, Lo mismo

//input radio
var queOpcion = document.getElementsByName('opcion')
    var op = queOpcion.length
    for(i = 0; i < op; i++){
        if(queOpcion[i].checked){
            console.log(queOpcion[i].value)
        }
    }

//Numero Aleatorio
var myNumeroAleatorio = Math.floor(Math.random()*11) //Entre 1 y 11

//Forma 2
//Generar numero aleatorio entre "min" y "max"
function generarNumero(min, max) {
    return (Math.random() * (max - min) + min);
}
// Manera 2
function generarNumeroDos(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
var num = generarNumero(1000, 10000)
console.log(Math.ceil(num))

//Agregar Elementos al Select Desde un FOR
var cocina = ['horno', 'microondas', 'tenedor', 'cuchillo', 'cuchara', 'sarten', 'heladera', 'freezer']
var seleccion = document.getElementById('select')

for(var i = 0; i < cocina.length; i++){
    var opc = document.createElement('option')
    opc.innerHTML =  cocina[i]
    seleccion.appendChild(opc)
}

Math.round() // Redondea Numeros Con Decimales
ejemplo.toFixed(2) // Tene en Cuenta Solo 2 Decimales Despues de la Coma. STRING!
parseFloat(precio.toFixed(2)) // NUMERO!

// Funcion que recibe como parametro el nombre y una propiedad aparte del nombre de un objeto. 
// contacts = objeto
function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            } else {
                return 'No such property'
            }
        }
    }
    return 'No such contact'
}

//? Calcular Promedio de un array, numero maximo y numero minimo
// Promedio
var sum = 0; 
var prom = 0;
for( var i = 0; i < a_num.length; i++ ){
  sum += a_num[i];
}
prom = sum/a_num.length;

// Maximo
var a_num = [1, 2, 3, 40, 5, 7,];
var max = Math.max(...a_num)

// Minimo
var a_num = [1, 2, 3, 40, 5, 7,];
var max = Math.max(...a_num)

//? Filtrar Propiedades Repetidades de un Objeto
function filtrarPropRepetidas(prop, obj){
    let filtrar = obj.map( (result) => {
        return result[prop]
    })
    filtrar = new Set(filtrar)
    filtrar = Array.from(filtrar)
    return filtrar
}

//todo: Timing
// 
setTimeout( fn, 1000, arg1, arg2 )
setTimeout( function(){} , 3000) // Ejecuta una funcion despues de cierto tiempo.
setInterval( () => {
    //Codigo a ejecutar
}, 4000) // Ejecuta una funcion cada cierto tiempo.

setTimeout( fn(), 1000 ) //! MAL

// JS Las Pone en la "Cola de Tareas" 
// Ejemplo:
console.log('a')
setTimeout( () => console.log('b'), 0) // Por Mas Que Sean 0segs Esta en la Cola de Tareas
console.log('c')

// Output: A - C - B.
let intervalo = setInterval(callback, 1000)
clearInterval(intervalo)
 
clearTimeout(par)

//todo: Cosas no Menos Importantes
//Agregar Comillas a un String:
var forma2 = "Esto va entre comillas: 'Hola' " //Alternando entre Dobles y Simples

//todo: API (con jQuery)
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const Luke = `${API_URL}${PEOPLE_URL.replace(':id', '1')}` //https://swapi.dev/api/people/1
const Opts = { crossDomain: true }

$.get(Luke, Opts, function () { // Funcion Callback. 3 Parametros; URL, CrossDomain: true, Callback
    console.log(arguments) // Clave Esto. Utilizarlo Siempre Que Necesite Saber Que Parametros Van 
})

function mostrarPersonaje(id){
    $.get(`${API_URL}${PEOPLE_URL.replace(':id', id)}`, Opts, function(person){
        console.log(`Yo soy ${person.name}`)
    }) // Dependiendo del ID Mostrara el Nombre con su Respectivo Nombre
}

mostrarPersonaje(1)
mostrarPersonaje(2)
mostrarPersonaje(3) 

//! Nunca Vamos a Saber el Orden en el que las Peticiones Llegan. ASINCRONISMO EN ESTADO PURO.
//! El Orden en el que los Pedimos NO Garantiza que Lleguen en ese Orden Pero Hay Maneras Para Lograrlo:
//* Para Lograrlo Necesitamos Mantener Dicho Orden a lo Largo de Nuestro Programa

function obtenerPersonajeID(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function(person){

        console.log(`Yo soy ${person.name}`)

        if(callback){ // Si Hay Callback Se Ejecuta
            callback()
        }

    })
}

//! CALLBACK HELL
obtenerPersonajeID(1, () => {
    obtenerPersonajeID(2, () => {
        obtenerPersonajeID(3) // Asi Sucesivamente
    })
})

//? Solucionar Problema CALLBACK HELL Con Promesas
// Los Requests Se Ejecutan en Serie. No en Paralelo
obtenerPersonajeID(1)
.then( () => {
    console.log('Personaje 3')
    return obtenerPersonajeID(2)
})
.then( () => {
    console.log('Personaje 3')
    return obtenerPersonajeID(3)
})

// Al Hacerlo en Paralelo Mejora el Rendimiento. Se Puede Hacer con Promises

//? Metodo fail(), Si Falla La Peticion Se Ejecuta Algo
function obtenerPersonaje(id, callback){
    $.get(url, opts, callback).fail( () => console.log('No se ejecuto'))
}

//todo: API: (con XMLHttpRequest)
// Implementación de una API con XMLHttpRquest

// Instanciando el request.
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    // Referencia al Objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    // Se Hace la Solicitud:
    xhttp.open('GET', url_api, true); // (Metodo, URL, Verificacion si es Asincrono o No.)

    // Cuando el estado del objeto cambia, ejecutar la función:
    xhttp.onreadystatechange = function (event){
        /* Los estados que puede tener son:
        -Estado 0: inicializado
        -Estado 1: cargando
        -Estado 2: ya se cargó
        -Estado 3: ya hay información
        -Estado 4: solicitud completa */
        if(xhttp.readyState === 4){
            //Verificar estado, aqui un resumen de los casos mas comunes:
            /*
            ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
            ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
            ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
            ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
            ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.
            */
            if(xhttp.status === 200){
                //Estandar de node con callbacks, primer parametro error, segundo el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    //Envio de la solicitud.
    xhttp.send();
}

//todo: FETCH
fetch('URL', { //? Recibe Como Parametro una URL. Puede ser un Servidor Local

    method: 'GET', //? Segundo Parametro es un Objeto con Especificaciones
    headers: {
        'Content-Type': 'application/json'
    }
}) 

//? Fetch Retorna una Promesa 

.then(function(response) {
    return response.json()  
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log("Error: " + error);
})

//* GET: Recibir Datos
//? POST: Enviar ""
//* PUT: Actualizar ""
//! DELETE: Eliminar ""

//todo: PROMESAS
// Sirven Para Trabajar con Peticiones Asincronas. Disminuye el Uso Excesivo de Callbacks
// Son Valores Que Todavia NO Conocemos. Tienen 3 Estados:
//? Pending (Cuando la Creamos) 
//* Fulfilled (Cuando se Resuelve)
//! Reject (Ocurre un Error) 

const p = new Promise( function(resolve, reject) { // Resolve si fue todo exitoso. Reject si hubo algun error. //! AMBAS SON FUNCIONES
    let suma = 1 + 1
    if(suma === 2){
        resolve('Correcto')
    } else {
        const error = new Error('Incorrecto')
        reject(error)
    }
})  

p
.then( function(mensaje){ //! El Parametro del Callback es la Respuesta de la Peticion
    console.log(mensaje)
})
.catch( function(error){
    console.log(error)
})


//* Si se Resuelve Exitosamente Llamamos a .then() y Se Obtiene el Valor Dentro de la Funcion. .then() Esta Vinculado con Resolve()
//! Si Hay Algun Error Llamamos a .catch() y Ocurre lo Mismo. .catch() Esta Vinculado con Reject() 

// Ejemplo
function obtenerPersonaje(id){
    return new Promise( (resolve, reject) => { //! NO OLVIDAR 'RETURN'
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
        .get(url, opts, function(){
            resolve()
        })
        .fail( () => reject(id) )

    })
}

obtenerPersonaje(1)
.then( function(personaje){
    console.log(`El Personaje Es ${personaje.name}`)
})
.catch( (personaje) => {
    console.log(`NO Se Pudo Obtener El ${personaje.name}`)
})
.finally( () => { 
    console.log('La Promesa Finalizo')
})

// En Vez de Escribir ID x ID Podemos Utilizar un Array, map() y all()
var ids = [1,2,3,4,5]
var promises = ids.map( (id) => obtenerPersonaje(id)) // Esto devuelve [promise,promise,promise]. Falta Utilizar all()

//? .all() Devuelve una Promesa Cuando Todas las Promesas en su Parametro se Hayan Realizado. Si Alguna de las Promesas Fue Rechazada, all() Tambien es Rechazada.  
Promise.all(promises) 
 //! FALTA INFO. COMPLETAR

// Otra Forma de Declararlas:
const p = new Promise( function(resolve, reject){})

Promise.race(arrayDePromesas) //Regresa Solo la Promesa Que Se Resuelve Primero

//todo: Async / Await
// Await Detiene la Ejecucion del Programa Hasta Que Todas las Promesas Sean Resultas
// Sintaxis: (Ejemplo Basico)
async function Test(){
    let promise = new Promise( (resolve, reject) => {
        setTimeout( () => resolve('Ok'), 1000)
    })
    let result = await promise
    console.log(result) // 'ok'
}


async function Fetching(){  
    try {
        const datosFetch = await obtenerPersonaje(1)
        console.log(datosFetch)
    } 
    catch {
        console.log('Error')
    }
}

//todo: EVENTOS
// Si un Evento NO Carga "cannot read addEventListener of null", Hacer Esto:
window.onload = function(){
    // code
}

//todo: Proxy
new Proxy(target, handler)

//todo: Error Handling
try {
    //code to try or test
    throw //throw a custom error to catch
} catch (error) {
    // code after getting an error
   } finally {   
    // code which executes in any case
}

//todo: Symbol. Se Utiliza Para Guardar un Valor Unico
Symbol('Valor Unico')