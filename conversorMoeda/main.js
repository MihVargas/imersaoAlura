function Converter() {
  var valorDolarElemento = document.getElementById('valorDolar')
  var valorDolar = valorDolarElemento.value

  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolarNumerico = parseFloat(valor)

  var valorEmReal = valorEmDolarNumerico * valorDolar

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido =
    'O resultado em real é ' +
    valorEmReal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  elementoValorConvertido.innerHTML = valorConvertido
}
