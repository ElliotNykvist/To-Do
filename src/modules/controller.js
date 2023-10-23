import { Project } from "./project";

// Use descriptive variable names
const projects = [];
const addButton = document.querySelector(".btn-list");
const inputField = document.querySelector(".new-list");
const projectList = document.getElementById("list-projects");

// Use meaningful function names
addButton.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
  const projectTitle = inputField.value.trim();
  if (projectTitle === "") {
    return; // Don't add empty projects
  }

  const project = new Project(projectTitle);
  projects.push(project);
  displayProjects();
  inputField.value = ""; // Clear the input field
}

function displayProjects() {
  // Clear the existing project list
  projectList.innerHTML = '';

  projects.forEach((project) => {
    const listItem = document.createElement("li");
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
      
    const projectSpan = document.createElement("span");
    projectSpan.textContent = project.title;
      
    const settingDotI = document.createElement("i");
    settingDotI.classList.add("fa-solid", "fa-ellipsis-vertical", "settingDot");
      
    projectDiv.appendChild(projectSpan);
    projectDiv.appendChild(settingDotI);
    listItem.appendChild(projectDiv);

    projectList.appendChild(listItem);
  });
}

export { displayProjects, projects };
