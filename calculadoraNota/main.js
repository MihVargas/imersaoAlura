function resultadoFinal() {
  let N1B = Number(document.getElementById('primeira').value)
  let N2B = Number(document.getElementById('segunda').value)
  let N3B = Number(document.getElementById('terceira').value)
  let N4B = Number(document.getElementById('quarta').value)
  let Nfinal = (N1B + N2B + N3B + N4B) / 4

  let NfinalFix = Nfinal.toFixed(1)
  if (NfinalFix >= 6) {
    document.getElementById(
      'resultado'
    ).innerHTML = `Sua média é ${NfinalFix}, você está aprovado`
  } else {
    document.getElementById(
      'resultado'
    ).innerHTML = `Sua média é ${NfinalFix}, você está reprovado`
  }
}

function limpar() {
  let N1B = Number(document.getElementById('primeira').value)

  document.querySelector('#primeira').value = ' '

  let N2B = Number(document.getElementById('segunda').value)

  document.querySelector('#segunda').value = ' '

  let N3B = Number(document.getElementById('terceira').value)

  document.querySelector('#terceira').value = ' '

  let N4B = Number(document.getElementById('quarta').value)

  document.querySelector('#quarta').value = ' '

  document.getElementById('resultado').innerHTML = ''
}
