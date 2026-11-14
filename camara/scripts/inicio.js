// scripts/inicio.js - Baseado no diretorio.js

const url = 'dados/membros.json';
const spotlightsContainer = document.querySelector('#spotlights-container');

// ===== CLIMA - OpenWeatherMap - Parnaíba, PI =====
const apiKey = "41d98124e059ee27e787f05a314d1150";
const lat = -2.905;
const lon = -41.776;

const climaAtualEl = document.querySelector("#clima-atual");
const previsaoEl = document.querySelector("#previsao");

const urlAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;

async function buscarClima() {
  if (!climaAtualEl) return;
  try {
    const resposta = await fetch(urlAtual);
    const dados = await resposta.json();
    const temp = Math.round(dados.main.temp);
    const desc = dados.weather[0].description;
    const icone = dados.weather[0].icon;

    climaAtualEl.innerHTML = `
      <img src="https://openweathermap.org/img/w/${icone}.png" alt="${desc}" width="80" height="80">
      <p class="temp-grande">${temp}°C</p>
      <p class="desc-clima">${desc}</p>
      <p>Umidade: ${dados.main.humidity}% | Sensação: ${Math.round(dados.main.feels_like)}°C</p>
    `;
  } catch (e) {
    climaAtualEl.innerHTML = "<p>Não foi possível carregar o clima.</p>";
  }
}

async function buscarPrevisao() {
  if (!previsaoEl) return;
  try {
    const resposta = await fetch(urlPrevisao);
    const dados = await resposta.json();

    // Agrupa por dia e pega o primeiro de cada dia
    const porDia = {};
    dados.list.forEach(item => {
      const dia = item.dt_txt.split(" ")[0];
      if (!porDia[dia]) porDia[dia] = item;
    });
    const dias = Object.values(porDia).slice(0, 3);

    previsaoEl.innerHTML = dias.map(item => {
      const data = new Date(item.dt_txt);
      const diaSemana = data.toLocaleDateString("pt-BR", { weekday: "long" });
      const diaFormatado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
      return `
        <div class="dia-previsao">
          <strong>${diaFormatado}</strong>
          <span>${Math.round(item.main.temp)}°C - ${item.weather[0].description}</span>
        </div>`;
    }).join("");
  } catch (e) {
    previsaoEl.innerHTML = "<p>Previsão indisponível.</p>";
  }
}

buscarClima();
buscarPrevisao();

// ===== SPOTLIGHTS - Igual ao exibirMembros do diretorio.js =====
async function obterDadosDeMembros(url) {
  const resposta = await fetch(url);
  const dados = await resposta.json();
  exibirSpotlights(dados);
}

obterDadosDeMembros(url);

const exibirSpotlights = (membros) => {
  if (!spotlightsContainer) return;

  // Filtra só Ouro (3) e Prata (2), igual o requisito pede
  const elegiveis = membros.filter((membro) => membro.nivel === 3 || membro.nivel === 2);

  // Embaralha e pega 3 aleatórios
  const embaralhados = elegiveis.sort(() => 0.5 - Math.random());
  const selecionados = embaralhados.slice(0, 3);

  selecionados.forEach((membro) => {
    // Cria os elementos - mesmo estilo do diretorio.js
    let cartao = document.createElement('article');
    let nome = document.createElement('h3');
    let info = document.createElement('div');
    let endereco = document.createElement('p');
    let telefone = document.createElement('p');
    let site = document.createElement('p');
    let linkSite = document.createElement('a');
    let nivel = document.createElement('p');
    let descricao = document.createElement('p');
    let logo = document.createElement('img');

    // Classe ouro / prata pra estilizar no CSS
    if (membro.nivel === 3) {
      cartao.classList.add('spotlight-card', 'ouro');
    } else {
      cartao.classList.add('spotlight-card', 'prata');
    }

    // Nome
    nome.textContent = membro.nome;

    // Caixinha de informações
    info.classList.add('info');

    // Informações com <span> - igual diretorio.js
    endereco.innerHTML = `<span>Endereço:</span> ${membro.endereco}`;
    telefone.innerHTML = `<span>Telefone:</span> ${membro.telefone}`;

    // Site como link clicável, com rótulo
    site.innerHTML = `<span>Site:</span> `;
    linkSite.setAttribute('href', membro.site);
    linkSite.setAttribute('target', '_blank');
    linkSite.textContent = "Visitar site";
    site.appendChild(linkSite);

    // Nível: 2 = Prata, 3 = Ouro
    let nivelTexto = '';
    if (membro.nivel === 3) {
      nivelTexto = '⭐ Membro Ouro';
    } else if (membro.nivel === 2) {
      nivelTexto = 'Membro Prata';
    }
    nivel.innerHTML = `<span>Nível:</span> ${nivelTexto}`;
    nivel.classList.add('nivel-membro');

    // Descrição
    descricao.textContent = membro.descricao;

    // Logo - igual diretorio.js
    logo.setAttribute('src', `imagens/${membro.imagem}`);
    logo.setAttribute('alt', `Logo de ${membro.nome}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '120');
    logo.setAttribute('height', '120');

    // Monta o cartão na ordem certa - igual diretorio.js
    info.appendChild(endereco);
    info.appendChild(telefone);
    info.appendChild(site);
    info.appendChild(nivel);
    info.appendChild(descricao);

    cartao.appendChild(logo);
    cartao.appendChild(nome);
    cartao.appendChild(info);

    spotlightsContainer.appendChild(cartao);
  });
};

// Menu mobile - copiado igual do diretorio.js
const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('#navegacao');

botaoMenu.addEventListener('click', () => {
  navegacao.classList.toggle('aberta');
  botaoMenu.textContent = navegacao.classList.contains('aberta') ? '✖' : '☰';
});

// Footer - ano atual e última modificação - copiado igual do diretorio.js
document.querySelector('#ano-atual').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent = document.lastModified;