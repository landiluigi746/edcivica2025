const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const subject = document.getElementById("project-subject");
const date = document.getElementById("project-date");
const projectContainer = document.getElementById("project-container");

window.onload = () => {
    const data = JSON.parse(sessionStorage.getItem("data"));

    document.title = data.name;
    title.innerText = data.name;
    description.innerText = data.description;
    subject.innerText += data.subject;
    date.innerText = data.date;

    if(data.embed) {
        const embedDiv = document.createElement("div");
        const embedFrame = document.createElement("iframe");

        embedFrame.loading = "lazy";
        embedFrame.classList.add("project-embed");
        embedFrame.src = data.embed;
        embedFrame.allowFullscreen = "allowfullscreen";
        embedFrame.allow = "fullscreen";
        embedFrame.onload = () => {
            embedFrame.style.opacity = "1";
        };

        embedDiv.appendChild(embedFrame);

        projectContainer.appendChild(embedDiv);
    } else {
        console.log("Error! Unrecognized type of project!");
    }

    document.getElementById("page-content").style.opacity = "1";
}