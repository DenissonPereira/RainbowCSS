// Mudando o tema do site
function mudarTema(){
    var mudarParagrafo = document.getElementById('paragrafo_tema');
    var corpo = document.body;
  
    if (corpo.classList.contains('dark')) {
      mudarParagrafo.textContent = 'Tema escuro';
    } else {
      mudarParagrafo.textContent = 'Tema claro';
    }
  
    corpo.classList.toggle('dark');
}
  
  
  