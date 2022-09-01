let targetasDestapadas = 0
let targeta1 = null
let targeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizaador = false
let timer = 100
let tiempoRegresivo = null
let timerInicial = timer

let mostrarMovimientos = document.getElementById("movimientos")
let mostrarAciertos = document.getElementById("aciertos")
let mostrarTiempo = document.getElementById("tiempo")
//generador de numeros aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

numeros = numeros.sort(() => {
  return Math.random() - 0.5
})
//generando numeros positivos y negativos
function contarTiempo() {
  tiempoRegresivo = setInterval(() => {
    timer--
    mostrarTiempo.innerHTML = `Tiempo:${timer}segundos`
    if (timer == 0) {
      clearInterval(tiempoRegresivo)
      bloquearTargetas()
    }
  }, 1000)
}

function bloquearTargetas() {
  for (let i = 0; i <= 15; i++) {
    let targetaBloqueada = document.getElementById(i)
    targetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
    targetaBloqueada.disabled = true
  }
}

function destapar(id) {
  if (temporizaador == false) {
    contarTiempo()
    temporizaador = true
  }

  targetasDestapadas++

  if (targetasDestapadas === 1) {
    //seleccione dentro del html el  que tenga el id
    targeta1 = document.getElementById(id)
    //los 16 botones se asociarar a los 16 numeros
    primerResultado = numeros[id]
    targeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
    //desabilitar la targeta
    targeta1.disabled = true
  } else if (targetasDestapadas === 2) {
    targeta2 = document.getElementById(id)
    //relaciona con los numeros
    segundoResultado = numeros[id]
    targeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;
    //desabilitacion boton2
    targeta2.disabled = true
    //aumenta movimientos de 2 en 2
    movimientos++
    //muestra movimientos
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

    if (primerResultado === segundoResultado) {
      //cuando los 2 valores sean iguales  regresa a 0
      targetasDestapadas = 0
      aciertos++
      mostrarAciertos.innerHTML = `aciertos: ${aciertos}`

      if (aciertos === 8) {
        clearInterval(tiempoRegresivo)
        mostrarAciertos.innerHTML = `aciertos: ${aciertos}`
        mostrarTiempo.innerHTML = `fantastico Solo demoraste ${
          timerInicial - timer
        }segundos`
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
      }
    } else {
      setTimeout(() => {
        targeta1.innerHTML = " "
        targeta2.innerHTML = " "
        targeta1.disabled = false
        targeta2.disabled = false
        targetasDestapadas = 0
      }, 1000)
    }
  }
}
