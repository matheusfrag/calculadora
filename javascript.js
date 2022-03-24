//Insere numero na tela da calculadora
function insert(num) {
  var numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}

//Limpar tela da calculadora
function clean() {
  document.getElementById('resultado').innerHTML = ''
}

//Apaga numero da tela da calculadora
function back() {
  var resultado = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

//Realiza as contas da calculadora
function calcular() {
  var resultado = document.getElementById('resultado').innerHTML
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    document.getElementById('resultado').innerHTML = 'Nada para calcular'
  }
}
