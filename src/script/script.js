// Pegando as minhas estregas no git
function fetchStars() {
  const repo = 'DenissonPereira/RainbowCSS'; // Substitua pelos seus próprios dados
  const apiUrl = `https://api.github.com/repos/${repo}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const stars = data.stargazers_count;
      document.getElementById('star-count').textContent = stars;
    })
    .catch(error => {
      console.error(error);
    });
}

//1
let isExpanded = false;

function clique1() {
  var elemento = document.getElementsByClassName('caixa1')[0];

  if (isExpanded) {
    elemento.style.width = '300px';
    elemento.style.height = '300px';
    elemento.style.zIndex = 1; // Volta ao valor original do z-index
    elemento.style.cursor = 'zoom-in';
  } else {
    elemento.style.width = '3200px';
    elemento.style.height = '2500px';
    elemento.style.zIndex = 2;
    elemento.style.cursor = 'zoom-out';
  }

  isExpanded = !isExpanded; // Alternar o estado
}

function coletarValor() {
  // Coleta o valor do input
  var input = document.getElementById("meuInput");
  var valor = input.value;

  // Coleta a caixa com a classe .caixa1 pelo ID
  var caixa = document.getElementById("minhaCaixa");

  // Altera o ângulo do gradiente linear
  caixa.style.backgroundImage = `linear-gradient(${valor}deg, #051df5 0%, #ee1313 100%)`;
}

//2
function clique2() {
  var elemento = document.getElementsByClassName('caixa2')[0];

  if (isExpanded) {
    elemento.style.width = '300px';
    elemento.style.height = '300px';
    elemento.style.zIndex = 1; // Volta ao valor original do z-index
    elemento.style.cursor = 'zoom-in';
  } else {
    elemento.style.width = '3200px';
    elemento.style.height = '2500px';
    elemento.style.zIndex = 2;
    elemento.style.cursor = 'zoom-out';
  }

  isExpanded = !isExpanded; // Alternar o estado
}