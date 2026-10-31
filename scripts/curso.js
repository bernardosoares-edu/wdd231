// Item 5 - Array oficial da BYU - NÃO traduzir as chaves
const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce you to programming concepts and constructs.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web and to careers in web development.',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Become more organized, efficient, and powerful by writing code that reuses functions.',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course focuses on user experience, accessibility, and performance.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

const listaCursos = document.getElementById("cursos-lista");
const totalCreditosEl = document.getElementById("total-creditos");

function exibirCursos(lista) {
  listaCursos.innerHTML = "";

  lista.forEach(curso => {
    const card = document.createElement("div");
    card.classList.add("card");

    if (curso.completed) {
      card.classList.add("completo");
    }

    card.innerHTML = `<span>${curso.subject} ${curso.number}</span>`;
    listaCursos.appendChild(card);
  });

  const total = lista.reduce((soma, curso) => soma + curso.credits, 0);
  totalCreditosEl.textContent = `Total de Créditos: ${total}`;
}

// Inicial
exibirCursos(courses);

// Item 8 - Filtros com filter()
document.getElementById("todos").addEventListener("click", () => {
  exibirCursos(courses);
});

document.getElementById("cse").addEventListener("click", () => {
  const filtrado = courses.filter(c => c.subject === "CSE");
  exibirCursos(filtrado);
});

document.getElementById("wdd").addEventListener("click", () => {
  const filtrado = courses.filter(c => c.subject === "WDD");
  exibirCursos(filtrado);
});