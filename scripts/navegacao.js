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