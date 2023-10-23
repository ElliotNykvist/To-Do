const projects = [];

class Project {
  constructor(title) {
    this._title = title;
    this._tasks = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value) {
      this._title = value;
    }
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    if (task) {
      this._tasks.push(task);
    }
  }
}

function createSidebar(){


const sidebarDiv = document.createElement("div");
sidebarDiv.setAttribute("id", "sidebar");


const listUl = document.createElement("ul");
listUl.setAttribute("id", "list");


const listItems = ["Tasks", "Today", "Week", "Month"];
listItems.forEach(itemText => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  if (itemText === "Tasks") {
    listItem.classList.add("active-list");
  }
  listUl.appendChild(listItem);
});


const projectTitlesDiv = document.createElement("div");
projectTitlesDiv.setAttribute("id", "project-titles");


const h2 = document.createElement("h2");
h2.textContent = "Add Projects";


const form = document.createElement("form");
form.classList.add("form-input");
form.setAttribute("id", "form-input");


const plusButton = document.createElement("button");
plusButton.classList.add("btn-list");
plusButton.setAttribute("aria-label", "create new project");
plusButton.textContent = "+";
plusButton.setAttribute("type", "button");


const input = document.createElement("input");
input.setAttribute("type", "text");
input.classList.add("new-list");
input.setAttribute("placeholder", "new project name");
input.setAttribute("aria-label", "new list name");


form.appendChild(plusButton);
form.appendChild(input);


projectTitlesDiv.appendChild(h2);
projectTitlesDiv.appendChild(form);


const listProjectsUl = document.createElement("ul");
listProjectsUl.setAttribute("id", "list-projects");

plusButton.addEventListener("click", handleAddButtonClick);


// Create list items for projects


// Append all the elements to the sidebar
sidebarDiv.appendChild(listUl);
sidebarDiv.appendChild(projectTitlesDiv);
sidebarDiv.appendChild(listProjectsUl);

// Add the sidebar to the document body or any other parent element as needed
return sidebarDiv;

}

function handleAddButtonClick() {
  const inputField = document.querySelector(".new-list");
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
  const listProjectsUl = document.getElementById("list-projects");
  // Clear the existing project list
  listProjectsUl.innerHTML = "";

  projects.forEach((project, index) => {
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

    projectSpan.addEventListener("click", () => {
      // Handle the click on a project to display its tasks
      displayTasks(project);
    });


    listProjectsUl.appendChild(listItem);
  });
}

function displayTasks(project) {

  const main = document.getElementById("main");

  main.innerHTML = "";

  const projectTitle = document.createElement("h1");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = project.title;

  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add-task");
  addTaskBtn.textContent = "+ Add Task";

  main.appendChild(projectTitle);
  main.appendChild(addTaskBtn);

  return main;

}






export default createSidebar;