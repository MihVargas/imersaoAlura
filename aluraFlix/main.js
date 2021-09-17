var listaFilmes = [];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

function Adicionar() {
  var linkFilme = document.getElementById("link").value;
  listaFilmes.push(linkFilme);
  var body = document.body;
  body.innerHTML += "<img src=" + linkFilme + ">";
}
