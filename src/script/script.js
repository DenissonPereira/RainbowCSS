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
function coletarValor2() {
  // Coleta o valor do input
  var input = document.getElementById("meuInput2");
  var valor2 = input.value;

  // Coleta a caixa com a classe .caixa pelo ID
  var caixa = document.getElementById("minhaCaixa2");

  // Altera o ângulo do gradiente linear
  caixa.style.backgroundImage = `linear-gradient(${valor2}deg, rgb(218, 218, 218) 0%, rgb(206, 203, 203) 1%, #e0e0e0 26%, #f8f4f4 48%, #d9d9d9 75%, #9e9c9c 100%)`;

}

//3
function clique3() {
  var elemento = document.getElementsByClassName('caixa3')[0];

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
function coletarValor3() {
  // Coleta o valor do input
  var input = document.getElementById("meuInput3");
  var valor3 = input.value;

  // Coleta a caixa com a classe .caixa pelo ID
  var caixa = document.getElementById("minhaCaixa3");

  // Altera o ângulo do gradiente linear
  caixa.style.backgroundImage = `linear-gradient(${valor3}deg, #c2bf14, #e94dee)`;

}

//4
function clique4() {
  var elemento = document.getElementsByClassName('caixa4')[0];

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
function coletarValor4() {
  // Coleta o valor do input
  var input = document.getElementById("meuInput4");
  var valor4 = input.value;

  // Coletando a caixa com a classe .caixa pelo ID
  var caixa = document.getElementById("minhaCaixa4");

  // Altera o ângulo do gradiente linear
  caixa.style.backgroundImage = `linear-gradient(${valor4}deg, #b827fc 0%, #1dd0f8 100%)`;

}

//21
function clique21() {
  var elemento = document.getElementsByClassName('caixa21')[0];

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
function coletarValor21() {
  // Coleta o valor do input
  var input = document.getElementById("meuInput21");
  var valor21 = input.value;

  // Coletando a caixa com a classe .caixa pelo ID
  var caixa = document.getElementById("minhaCaixa21");

  // Altera o ângulo do gradiente linear
  caixa.style.backgroundImage = `linear-gradient(${valor21}deg, #c5872b 0%, #ca3e25 100%)`;

}

