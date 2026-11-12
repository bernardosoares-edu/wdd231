const tempAtual = document.querySelector('#temp-atual');
const iconeDoClima = document.querySelector('#icone-do-clima');
const descrDaLegenda = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=41d98124e059ee27e787f05a314d1150";

async function apiFetch() {
  try {
    const resposta = await fetch(url);
    if (resposta.ok) {
      const dados = await resposta.json();
      console.log(dados);
      mostrarResultados(dados);
    } else {
      throw Error(await resposta.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function mostrarResultados(dados) {
  tempAtual.innerHTML = `${dados.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${dados.weather[0].icon}.png`;
  let descr = dados.weather[0].description;
  iconeDoClima.setAttribute('src', iconsrc);
  iconeDoClima.setAttribute('alt', descr);
  descrDaLegenda.textContent = `${descr}`;
}

apiFetch();