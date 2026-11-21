// ===== MENU =====
const botaoMenu = document.querySelector("#menu");
const navegacao = document.querySelector("#navegacao");

botaoMenu.addEventListener("click", () => {
    navegacao.classList.toggle("aberta");
    botaoMenu.textContent = navegacao.classList.contains("aberta") ? "✖" : "☰";
});

// ===== FOOTER - ANO E ÚLTIMA MODIFICAÇÃO =====
document.querySelector("#ano-atual").textContent = new Date().getFullYear();
document.querySelector("#ultima-modificacao").textContent = document.lastModified;

// ===== TIMESTAMP - DATA E HORA DO ENVIO =====
const campoTimestamp = document.querySelector("#timestamp");
campoTimestamp.value = new Date().toISOString();

// ===== MODAIS =====
const botoesAbrir = document.querySelectorAll("[data-modal]");
const botoesFechar = document.querySelectorAll(".fechar");

botoesAbrir.forEach((botao) => {
    botao.addEventListener("click", () => {
        const idModal = botao.getAttribute("data-modal");
        const modal = document.querySelector(`#${idModal}`);
        modal.showModal();
    });
});

botoesFechar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const modal = botao.closest("dialog");
        modal.close();
    });
});

