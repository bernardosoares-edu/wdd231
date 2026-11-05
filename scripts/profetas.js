// scripts/profetas.js

const url = 'https://byui-cse.github.io/cse-ww-program-pt/data/profetas-dos-ultimos-dias.json';
const cartoes = document.querySelector('#cartoes');

async function obterDadosDeProfetas(url) {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  exibirProfetas(dados.profetas);
}

obterDadosDeProfetas(url);

const exibirProfetas = (profetas) => {
  profetas.forEach((profeta) => {
    // Cria os elementos
    let cartao = document.createElement('section');
    let nomeCompleto = document.createElement('h2');
    let info = document.createElement('div');
    let dataNascimento = document.createElement('p');
    let localNascimento = document.createElement('p');
    let numeroFilhos = document.createElement('p');
    let tempoServico = document.createElement('p');
    let falecimento = document.createElement('p');
    let retrato = document.createElement('img');

    // Nome
    nomeCompleto.textContent = `${profeta.nome} ${profeta.sobrenome}`;

    // Caixinha branca
    info.classList.add('info');

    // Informações com <span> para ficar amarelo no CSS
    dataNascimento.innerHTML = `<span>Nascimento:</span> ${profeta.nascimento}`;
    localNascimento.innerHTML = `<span>Lugar:</span> ${profeta.localNascimento}`;
    numeroFilhos.innerHTML = `<span>Filhos:</span> ${profeta.numeroFilhos}`;
    tempoServico.innerHTML = `<span>Tempo de serviço:</span> ${profeta.duracao} anos`;

    // Se o profeta ainda está vivo, o campo morte vem vazio
    if (profeta.morte) {
      falecimento.innerHTML = `<span>Falecimento:</span> ${profeta.morte}`;
    } else {
      falecimento.innerHTML = `<span>Falecimento:</span> Ainda vivo`;
    }

    // Foto
    retrato.setAttribute('src', profeta.urlImagem);
    retrato.setAttribute('alt', `Retrato de ${profeta.nome} ${profeta.sobrenome}`);
    retrato.setAttribute('loading', 'lazy');
    retrato.setAttribute('width', '340');
    retrato.setAttribute('height', '440');

    // Monta o cartão na ordem certa
    info.appendChild(dataNascimento);
    info.appendChild(localNascimento);
    info.appendChild(numeroFilhos);
    info.appendChild(tempoServico);
    info.appendChild(falecimento);

    cartao.appendChild(nomeCompleto);
    cartao.appendChild(info);
    cartao.appendChild(retrato);

    cartoes.appendChild(cartao);
  });
};