const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const embedContainer = document.getElementById("project-embed-container");

window.onload = function() {
    const data = JSON.parse(sessionStorage.getItem("data"));
    document.title = data.title;
    title.innerText = data.title;
    description.innerText = data.description;
    embedContainer.innerHTML = data.embed;
}