document.getElementById("expandButton").addEventListener("click", function() {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.opacity = 0.7;
  });