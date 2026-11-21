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

// ===== PEGAR OS DADOS DO FORMULÁRIO NA URL =====
const dados = new URLSearchParams(window.location.search);

const nome = dados.get("nome");
const sobrenome = dados.get("sobrenome");
const email = dados.get("email");
const celular = dados.get("celular");
const empresa = dados.get("empresa");
const nivel = dados.get("nivel");
const descricao = dados.get("descricao");
const timestamp = dados.get("timestamp");

const nomesNivel = {
    "np": "Sem Fins Lucrativos",
    "bronze": "Bronze",
    "silver": "Prata",
    "gold": "Ouro"
};

const resultado = document.querySelector("#resultado");

resultado.innerHTML = `
    <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Celular:</strong> ${celular}</p>
    <p><strong>Empresa:</strong> ${empresa}</p>
    <p><strong>Nível escolhido:</strong> ${nomesNivel[nivel]}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Enviado em:</strong> ${new Date(timestamp).toLocaleString("pt-BR")}</p>
`;