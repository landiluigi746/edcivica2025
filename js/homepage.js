const projectsContainer = document.getElementById("projects-container");
const groupContainer = document.getElementById("group-container");

const projects = [
    {
        name: "NHS vs SSN",
        description: "In questo progetto siamo andati ad effettuare un'approfondita analisi e confronto tra il sistema sanitario nazionale inglese e quello italiano, mettendo in evidenza i punti di forza dell'uno e dell'altro e l'opinione della popolazione",
        brief: "Approfondimento e confronto tra il sistema sanitario nazionale inglese e quello italiano",
        embed: "https://www.canva.com/design/DAGeIqAfsyw/nNsGUHwrwED_2qHVltN0rQ/view?embed",
        image: "projects/ssn_vs_nhs.png"
    },

    {
        name: "prj italiano",
        description: "E io che casio ne so che ancora lo dobbiamo fare?",
        brief: "Un approfondimento su non lo so cosa ancora",
        embed: "https://www.canva.com/design/DAGeIqAfsyw/nNsGUHwrwED_2qHVltN0rQ/view?embed",
        image: "projects/ssn_vs_nhs.png"
    },

    {
        name: "prova con un testo cocchino delle mie palle amare al sangue di carciofo secco prosecco di san crispino pane e vino",
        description: "E io che casio ne so che ancora lo dobbiamo fare?",
        brief: "Un approfondimento su non lo so cosa ancora",
        embed: "https://www.canva.com/design/DAGeIqAfsyw/nNsGUHwrwED_2qHVltN0rQ/view?embed",
        image: "projects/ssn_vs_nhs.png"
    },

    {
        name: "example",
        description: "E io che casio ne so che ancora lo dobbiamo fare?",
        brief: "Un approfondimento su non lo so cosa ancora",
        embed: "https://www.canva.com/design/DAGeIqAfsyw/nNsGUHwrwED_2qHVltN0rQ/view?embed",
        image: "projects/ssn_vs_nhs.png"
    }
];

const group = [
    {
        name: "Luigi Landi",
        description: "bla bla bla",
        image: "https://picsum.photos/200"
    },

    {
        name: "Francesco Gaeta",
        description: "bla bla bla",
        image: "https://picsum.photos/200"
    },

    {
        name: "Nicolò Guariniello",
        description: "bla bla bla",
        image: "https://picsum.photos/200"
    },

    {
        name: "Christian Aiello",
        description: "bla bla bla",
        image: "https://picsum.photos/200"
    }
];

function loadProjects() {
    projects.forEach((project) => {
        const card = document.createElement("div");
        const redirect = document.createElement("a");

        card.classList.add("project-card");

        redirect.href = "project.html";
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

        card.classList.add("contributor");

        card.innerHTML = `
            <img class="contributor-img" src=${contributor.image}>
            <h3>${contributor.name}</h3>
            <p class="contributor-desc">${contributor.description}</p>
        `;

        groupContainer.appendChild(card);
    });
}

window.onload = () => {
    loadProjects();
    loadContacts();
    
    document.getElementById("page-content").style.opacity = "1";
    document.getElementById("home").style.transform = "scale(1.0)";
};