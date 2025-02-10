const projectsContainer = document.getElementById("projects-container");
const groupContainer = document.getElementById("group-container");

const projects = [
    {
        name: "SSN vs NHS",
        subject: "Inglese",
        date: "03/02/2025",
        description: "In questo progetto, abbiamo condotto un'analisi approfondita e un confronto dettagliato tra il sistema sanitario nazionale inglese (NHS, National Health System) e quello italiano (SSN, Sistema Sanitario Nazionale), evidenziando i punti di forza di ciascun sistema in aspetti chiave come spese sanitarie, soddisfazione dei cittadini ed efficienza operativa. Abbiamo iniziato con una panoramica generale su entrambi i sistemi sanitari, su come questi vengono finanziati, i servizi che offrono e l'accessibilità. Successivamente abbiami analizzato dati specifici per mettere in luce le differenze significative, in particolare per quanto riguarda il costo dell'infrastruttura sanitaria e la soddisfazione generale della popolazione.",
        brief: "Approfondimento e confronto tra il sistema sanitario nazionale inglese e quello italiano",
        embed: "https://www.canva.com/design/DAGeIqAfsyw/P5CCEEPxhCbbLSahmKyR6A/view?embed",
        image: "projects/ssn_vs_nhs.png"
    }
];

const group = [
    {
        name: "Luigi Landi",
        description: "Group coordinator, Website developer, Content writer",
        github: "landiluigi746"
    },

    {
        name: "Francesco Gaeta",
        description: "Graphic designer, Content writer",
        github: "KeKK0z"
    },

    {
        name: "Nicolò Guariniello",
        description: "Website developer",
        github: "nicgua"
    },

    {
        name: "Christian Aiello",
        description: "Content researcher",
        github: "Chripolpo07"
    }
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