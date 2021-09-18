//Variavel global
var listaFilmes = []

//Função para adicionar novo filme ao catálogo
// *TODO: Checar se não existe o filme no catálogo antes de incluir
function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else if (filmeFavorito.endsWith('.JPG')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}


//Função que lista os filmes no catálogo
function listarFilmesNaTela(filme) {
  var elementoFilmeFavorito = '<img src=' + filme + '>'
  listaFilmes.push(elementoFilmeFavorito)
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = listaFilmes
}

//Função para remover um filme do catálogo
// *TODO: Checar se existe o filme no catálogo para remover
function removerFilme() {
  var filmeRemover = document.getElementById('filme').value
  if (filmeRemover.endsWith('.jpg')) {
    removeItemLista(filmeRemover)
  } else if (filmeRemover.endsWith('.JPG')) {
    removeItemLista(filmeRemover)
  } else {
    alert('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

//Função que remove o filme do catálogo
function removeItemLista(endereco) {
  var enderecoFilme = '<img src=' + endereco + '>'
  indexRemover = listaFilmes.indexOf(enderecoFilme) + 1
  var resultado = listaFilmes.splice(indexRemover)
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = resultado
}
