const botaoMenu = document.getElementById("menu");
const menuNav = document.querySelector("nav");

botaoMenu.addEventListener("click", () => {
  menuNav.classList.toggle("open");
 
  if (menuNav.classList.contains("open")) {
    botaoMenu.textContent = "❌";
  } else {
    botaoMenu.textContent = "☰";
  }
});

const paginaAtual = window.location.pathname;
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  if (paginaAtual.includes(link.getAttribute("href"))) {
    link.classList.add("ativo");
    link.classList.add("active");
  }
});