// Menu responsivo - Item 3
const botaoMenu = document.getElementById("menu");
const menuNav = document.querySelector("nav");

botaoMenu.addEventListener("click", () => {
  menuNav.classList.toggle("open");
  
  // Troca o ícone
  if (menuNav.classList.contains("open")) {
    botaoMenu.textContent = "❌";
  } else {
    botaoMenu.textContent = "☰";
  }
});