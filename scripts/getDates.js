// Item 4 - Ano atual no primeiro parágrafo do rodapé
const anoAtual = document.getElementById("anoAtual");
const ano = new Date().getFullYear();
anoAtual.textContent = ano;

// Item 4 - Última modificação no segundo parágrafo
// Código EXATAMENTE como está na caixa preta do seu print
document.getElementById("ultimaModificacao").innerHTML = `Última Modificação: ${document.lastModified}`;