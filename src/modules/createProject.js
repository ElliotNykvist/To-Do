let projects = [];

class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
}



function createProject() {

  const input = document.querySelector(".new-list");

  const project = new Project(input.value);

  projects.push(project);


  
}

projects.forEach(project => {
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
  listProjectsUl.appendChild(listItem);
});

export default createProject;