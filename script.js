let isExpanded = false;

function clique() {
  var elemento = document.getElementsByClassName('caixa1')[0];

  if (isExpanded) {
    elemento.style.width = '300px';
    elemento.style.height = '300px';
    elemento.style.zIndex = 1; // Volta ao valor original do z-index
  } else {
    elemento.style.width = '3200px';
    elemento.style.height = '2500px';
    elemento.style.zIndex = 2;
  }

  isExpanded = !isExpanded; // Alternar o estado
}