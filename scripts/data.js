const anoAtual = document.getElementById("anoAtual");
const ano = new Date().getFullYear();
anoAtual.textContent = ano;

document.getElementById("ultimaModificacao").innerHTML = `Última Modificação: ${document.lastModified}`;