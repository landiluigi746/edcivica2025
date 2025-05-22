const projectsContainer = document.getElementById("projects-container");
const groupContainer = document.getElementById("group-container");

const projects = [
  {
    name: "SSN vs NHS",
    subject: "Inglese",
    date: "03/02/2025",
    description:
      "In questo progetto, abbiamo condotto un'analisi approfondita e un confronto dettagliato tra il sistema sanitario nazionale inglese (NHS, National Health System) e quello italiano (SSN, Sistema Sanitario Nazionale), evidenziando i punti di forza di ciascun sistema in aspetti chiave come spese sanitarie, soddisfazione dei cittadini ed efficienza operativa. Abbiamo iniziato con una panoramica generale su entrambi i sistemi sanitari, su come questi vengono finanziati, i servizi che offrono e l'accessibilità. Successivamente abbiami analizzato dati specifici per mettere in luce le differenze significative, in particolare per quanto riguarda il costo dell'infrastruttura sanitaria e la soddisfazione generale della popolazione.",
    brief:
      "Approfondimento e confronto tra il sistema sanitario nazionale inglese e quello italiano",
    embed:
      "https://www.canva.com/design/DAGeIqAfsyw/P5CCEEPxhCbbLSahmKyR6A/view?embed",
    image: "projects/ssn_vs_nhs.png",
  },

  {
    name: "Salute e benessere",
    subject: "Educazione Fisica",
    date: "29/04/2025",
    description:
      "In questo progetto abbiamo fatto una panoramica completa sul concetto di benessere, inteso non solo come assenza di malattia, ma come equilibrio tra corpo, mente, emozioni, ambiente e relazioni. Viene approfondito il ruolo di alimentazione, attività fisica, sonno, prevenzione medica e gestione delle dipendenze nel promuovere il benessere fisico e mentale. La presentazione sottolinea l’importanza di uno stile di vita sano, consapevole e sostenibile, che favorisca la soddisfazione personale e la qualità della vita nel lungo termine.",
    brief: "Panoramica sul concetto di benessere a 360 gradi",
    embed:
      "https://docs.google.com/presentation/d/e/2PACX-1vTxkQHkj_bDKNj71YMhZzq8aM1UaOPybz5-_UjDIjpVqf1UjovWM88DZhoBop9opg/pubembed?start=true&loop=true&delayms=60000",
    image: "projects/benessere.png",
  },

  {
    name: "Elettroporazione e ipertermia",
    subject: "Telecomunicazioni",
    date: "21/05/2025",
    description:
      "In questo progetto abbiamo realizzato una panoramica su cosa sono e come vengono utilizzate l'elettroporazione e l'ipertermia, evidenziando per entrambi vantaggi svantaggi e le effettive applicazioni in campo medico.",
    brief:
      "Panoramica sull'elettroporazione e l'ipertermia e le loro applicazioni",
    embed:
      "https://docs.google.com/document/d/e/2PACX-1vTSmwulSVFx4J7tUuENicdLSLwF3JHHJvScSFmOAA8HryBqHitDbZnSDpMEcY-__jI5z83zWU_saJe4/pub?embedded=true",
    image: "projects/elettroporazione_ipertermia.png",
  },
];

const group = [
  {
    name: "Luigi Landi",
    description: "Group coordinator, Website developer, Content writer",
    github: "landiluigi746",
  },

  {
    name: "Francesco Gaeta",
    description: "Graphic designer, Content writer",
    github: "KeKK0z",
  },

  {
    name: "Nicolò Guariniello",
    description: "Website developer",
    github: "nicgua",
  },

  {
    name: "Christian Aiello",
    description: "Content researcher",
    github: "Chripolpo07",
  },
];

function loadProjects() {
  projects.forEach((project) => {
    const card = document.createElement("div");
    const redirect = document.createElement("a");

    card.classList.add("project-card");

    redirect.href = "project.html";
    redirect.target = "_blank";
    redirect.classList.add("project-redirect");

    redirect.innerHTML = `
            <img class="project-img" src="img/${project.image}">
            <h3>${project.name}</h3>
            <p>${project.brief}</p>
        `;

    redirect.onclick = (event) => {
      event.preventDefault();
      window.sessionStorage.setItem("data", JSON.stringify(project));
      window.location.href = redirect.href;
    };

    card.appendChild(redirect);
    projectsContainer.appendChild(card);
  });
}

function loadContacts() {
  group.forEach((contributor) => {
    const card = document.createElement("div");
    const redirect = document.createElement("a");

    redirect.href = `https://github.com/${contributor.github}`;
    redirect.target = "_blank";
    redirect.classList.add("contributor-link");

    card.classList.add("contributor");

    redirect.innerHTML = `
            <img class="contributor-img" src="https://avatars.githubusercontent.com/${contributor.github}">
            <h3>${contributor.name}</h3>
            <p class="contributor-desc">${contributor.description}</p>
        `;

    card.appendChild(redirect);
    groupContainer.appendChild(card);
  });
}

window.onload = () => {
  loadProjects();
  loadContacts();

  document.getElementById("page-content").style.opacity = "1";
  document.getElementById("home").style.transform = "scale(1.0)";
};
