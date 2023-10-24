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

class Task {
  constructor(title, dueDate, radio) {
    this._title = title;
    this._dueDate = dueDate;
    this._radio = radio;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value) {
      this._title = value;
    }
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    if (value) {
      this._dueDate = value;
    }
  }

  get radio() {
    return this._radio;
  }

  set radio(value) {
    if (value) {
      this._radio = value;
    }
  }
}

function createSidebar() {
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

  sidebarDiv.appendChild(listUl);
  sidebarDiv.appendChild(projectTitlesDiv);
  sidebarDiv.appendChild(listProjectsUl);

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
  listProjectsUl.innerHTML = "";

  projects.forEach((project, index) => {
    const listItem = document.createElement("li");
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projectSpan = document.createElement("span");
    projectSpan.textContent = project.title;

    const settingDotI = document.createElement("i");
    settingDotI.classList.add("fas", "fa-ellipsis-vertical", "settingDot");

    projectDiv.appendChild(projectSpan);
    projectDiv.appendChild(settingDotI);
    listItem.appendChild(projectDiv);

    projectSpan.addEventListener("click", () => {
      displayTasks(project);
    });

    settingDotI.addEventListener("click", () => {
      projectDiv.innerHTML = "";
      projectDiv.setAttribute("id", "active-project");
      const settingsForm = document.createElement("form");
      settingsForm.classList.add("input");
      settingsForm.setAttribute("id", "input");

      const newProjectDiv = document.createElement("div");
      newProjectDiv.classList.add("new-project");

      const input = document.createElement("input");
      input.value = project.title;
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "new project name");
      input.setAttribute("aria-label", "new list name");
      input.classList.add("new-list");

      const closeBtn = document.createElement("i");
      closeBtn.setAttribute("id", "x-margin");
      closeBtn.classList.add("fas", "fa-times");

      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons-project");

      const renameBtn = document.createElement("button");
      renameBtn.classList.add("small-btn");
      renameBtn.setAttribute("id", "rename");
      renameBtn.setAttribute("type", "button");
      renameBtn.textContent = "Rename";

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("small-btn");
      deleteBtn.setAttribute("id", "delete");
      deleteBtn.setAttribute("type", "button");
      deleteBtn.textContent = "Delete";

      newProjectDiv.appendChild(input);
      newProjectDiv.appendChild(closeBtn);

      buttonsDiv.appendChild(renameBtn);
      buttonsDiv.appendChild(deleteBtn);

      settingsForm.appendChild(newProjectDiv);
      settingsForm.appendChild(buttonsDiv);

      closeBtn.addEventListener("click", () => {
        projectDiv.innerHTML = "";
        projectDiv.removeAttribute("id");
        displayProjects();
      });

      renameBtn.addEventListener("click", () => {
        project.title = input.value;
        projectDiv.innerHTML = "";
        projectDiv.removeAttribute("id");
        displayProjects();
      });

      deleteBtn.addEventListener("click", () => {
        projects.splice(index, 1);
        projectDiv.innerHTML = "";
        projectDiv.removeAttribute("id");
        displayProjects();
      });

      projectDiv.appendChild(settingsForm);
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

  addTaskBtn.addEventListener("click", () => {
    border.classList.add("active");
  });

  const border = document.createElement("div");
  border.classList.add("border");

  const borderDiv = document.createElement("div");
  borderDiv.classList.add("add-task-form");

  const form1 = document.createElement("form");
  form1.setAttribute("id", "task-form");

  const topAddTask = document.createElement("div");
  topAddTask.classList.add("top-add-task");

  const formTitle = document.createElement("h4");
  formTitle.textContent = "Add Task";

  const closeFormBtn = document.createElement("i");
  closeFormBtn.classList.add("fas", "fa-times");

  closeFormBtn.addEventListener("click", () => {
    border.classList.remove("active");
  });

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "Title";
  titleInput.name = "Title";
  titleInput.placeholder = "Title";
  titleInput.maxLength = 25;

  const dueDateDiv = document.createElement("div");
  dueDateDiv.classList.add("inline");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.htmlFor = "new-todo-date";
  dueDateLabel.textContent = "Due Date";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.classList.add("create-new__date-input");
  dueDateInput.id = "new-todo-date";
  dueDateInput.name = "new-todo";
  dueDateInput.required = true;

  const priorityDiv = document.createElement("div");
  priorityDiv.classList.add("inline");

  const priorityLabel = document.createElement("label");
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";

  const importantsDiv = document.createElement("div");
  importantsDiv.classList.add("importants");

  const priorityOptions = ["low", "medium", "high"];
  for (const option of priorityOptions) {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.id = option;
    radioInput.name = "priority";
    radioInput.value = option;
    radioInput.classList.add("radio");
    if (option === "low") {
      radioInput.checked = true;
    }

    const radioLabel = document.createElement("label");
    radioLabel.htmlFor = option;
    radioLabel.textContent = option.charAt(0).toUpperCase() + option.slice(1);

    const radioDiv = document.createElement("div");
    radioDiv.appendChild(radioInput);
    radioDiv.appendChild(radioLabel);

    importantsDiv.appendChild(radioDiv);
  }

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsToDo");

  const addButton = document.createElement("button");
  addButton.classList.add("btn");
  addButton.id = "addToDO";
  addButton.type = "button";
  addButton.textContent = "Add";

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("btn");
  cancelButton.id = "cancelToDO";
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";

  addButton.addEventListener("click", () => {
    handleAddTaskClick(project);
    border.classList.remove("active");
  });

  cancelButton.addEventListener("click", () => {
    border.classList.remove("active");
  });

  topAddTask.appendChild(formTitle);
  topAddTask.appendChild(closeFormBtn);
  dueDateDiv.appendChild(dueDateLabel);
  dueDateDiv.appendChild(dueDateInput);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(importantsDiv);
  buttonsDiv.appendChild(addButton);
  buttonsDiv.appendChild(cancelButton);

  form1.appendChild(topAddTask);
  form1.appendChild(titleInput);
  form1.appendChild(dueDateDiv);
  form1.appendChild(priorityDiv);
  form1.appendChild(buttonsDiv);

  borderDiv.appendChild(form1);
  border.appendChild(borderDiv);

  main.appendChild(projectTitle);
  main.appendChild(addTaskBtn);
  main.appendChild(border);
  
  return main;
}

function handleAddTaskClick(project) {
  const inputField = document.getElementById("Title");
  const dueDateInput = document.getElementById("new-todo-date");
  const taskTitle = inputField.value.trim();
  const dueDate = dueDateInput.value;

  let radio = "";

  const selectedRadio = document.querySelector("input[name='priority']:checked");
  if (selectedRadio) {
    radio = selectedRadio.value;
  }

  if (taskTitle === "") {
    return;
  }

  const task = new Task(taskTitle, dueDate, radio);
  addTask(project, task);
  showTasks(project);
}

function addTask(project, task) {
  project.addTask(task);
}

function showTasks(project) {
  const tasks = document.getElementById("tasks");
  tasks.innerHTML = "";

  project.tasks.forEach((task) => {
    const listItem = document.createElement("div");
    listItem.classList.add("task");
    listItem.setAttribute("id", task.dueDate);

    const taskTitleDiv = document.createElement("div");
    taskTitleDiv.classList.add("task-title");

    const taskTitle = document.createElement("span");
    taskTitle.textContent = task.title;

    const taskDueDate = document.createElement("p");

    const taskTime = document.createElement("time");
    taskTime.setAttribute("dueDate", task.dueDate);
    taskTime.textContent = task.dueDate;

    const taskSettings = document.createElement("i");
    taskSettings.classList.add("fas", "fa-ellipsis-vertical");

    taskTitleDiv.appendChild(taskTitle);
    taskDueDate.appendChild(taskTime);
    taskTitleDiv.appendChild(taskDueDate);
    taskTitleDiv.appendChild(taskSettings);

    listItem.appendChild(taskTitleDiv);
    tasks.appendChild(listItem);
  });
}

export default createSidebar;
