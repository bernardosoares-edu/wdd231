// scripts/diretorio.js

const url = 'dados/membros.json';
const cartoes = document.querySelector('#cartoes');
cartoes.classList.add('grade');

async function obterDadosDeMembros(url) {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  exibirMembros(dados);
}

obterDadosDeMembros(url);

const exibirMembros = (membros) => {
  membros.forEach((membro) => {
    // Cria os elementos
    let cartao = document.createElement('section');
    let nome = document.createElement('h2');
    let info = document.createElement('div');
    let endereco = document.createElement('p');
    let telefone = document.createElement('p');
    let site = document.createElement('p');
    let linkSite = document.createElement('a');
    let nivel = document.createElement('p');
    let descricao = document.createElement('p');
    let logo = document.createElement('img');

    // Nome
    nome.textContent = membro.nome;

    // Caixinha de informações
    info.classList.add('info');

    // Informações com <span>
    endereco.innerHTML = `<span>Endereço:</span> ${membro.endereco}`;
    telefone.innerHTML = `<span>Telefone:</span> ${membro.telefone}`;

    // Site como link clicável, com rótulo
    site.innerHTML = `<span>Site:</span> `;
    linkSite.setAttribute('href', membro.site);
    linkSite.setAttribute('target', '_blank');
    linkSite.textContent = "Visitar site";
    site.appendChild(linkSite);

    // Nível: 1 = Membro, 2 = Prata, 3 = Ouro
    let nivelTexto = '';
    if (membro.nivel === 3) {
      nivelTexto = 'Ouro';
    } else if (membro.nivel === 2) {
      nivelTexto = 'Prata';
    } else {
      nivelTexto = 'Membro';
    }
    nivel.innerHTML = `<span>Nível:</span> ${nivelTexto}`;

    // Descrição
    descricao.textContent = membro.descricao;

    // Logo
    logo.setAttribute('src', `imagens/${membro.imagem}`);
    logo.setAttribute('alt', `Logo de ${membro.nome}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '120');
    logo.setAttribute('height', '120');

    // Monta o cartão na ordem certa
    info.appendChild(endereco);
    info.appendChild(telefone);
    info.appendChild(site);
    info.appendChild(nivel);
    info.appendChild(descricao);

    cartao.appendChild(logo);
    cartao.appendChild(nome);
    cartao.appendChild(info);

    cartoes.appendChild(cartao);
  });
};

// Menu mobile
const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('#navegacao');

botaoMenu.addEventListener('click', () => {
  navegacao.classList.toggle('aberta');
  botaoMenu.textContent = navegacao.classList.contains('aberta') ? '✖' : '☰';
});

// Footer - ano atual e última modificação
document.querySelector('#ano-atual').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent = document.lastModified;

// Botões Grade / Lista
const botaoGrade = document.querySelector('#grade');
const botaoLista = document.querySelector('#lista');

botaoGrade.addEventListener('click', () => {
  cartoes.classList.remove('lista');
  cartoes.classList.add('grade');
});

botaoLista.addEventListener('click', () => {
  cartoes.classList.remove('grade');
  cartoes.classList.add('lista');
});