import Project from './project';
import Task from './task';


const projects = [];
const allTasks = [];

const taskDiv = document.createElement("div");
taskDiv.setAttribute("id", "tasks");


function createSidebar() {

  const sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar");

  const listUl = document.createElement("ul");
  listUl.setAttribute("id", "list");

  const listItems = ["Tasks", "Today", "Week", "Month", "Year"];
  listItems.forEach(itemText => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    listUl.appendChild(listItem);

    listItem.addEventListener("click", () => {
      const main = document.getElementById("main");
      main.innerHTML = "";

      console.log(allTasks);

      const listTitle = document.createElement("h1");
      listTitle.classList.add("project-title");
      listTitle.textContent = listItem.textContent;
      main.appendChild(listTitle);
      main.appendChild(taskDiv)

      // Remove the "active-list" class from all list items
      listUl.querySelectorAll("li").forEach(item => {
        item.classList.remove("active-list");
      });

      // Add the "active-list" class to the clicked item
      listItem.classList.add("active-list");

      // Append the return value of showListTasks to main
      if (itemText === "Tasks") {
        taskDiv = showListTasks(allTasks);
      } else if (itemText === "Today") {
        taskDiv = showListTasks(allTasks, 'Today');
      } else if (itemText === "Week") {
        taskDiv = showListTasks(allTasks, 'Week');
      } else if (itemText === "Month") {
        taskDiv = showListTasks(allTasks, 'Month');
      } else if (itemText === "Year") {
        taskDiv = showListTasks(allTasks, 'Year');
      }

      if (taskDiv) {
        main.appendChild(taskDiv);
      }
    });
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
      // Remove the "active-list" class from all list items
      document.querySelectorAll("li").forEach(item => {
        item.classList.remove("active-list");
      });
  
      // Remove the "active-list" class from all projectSpans
      document.querySelectorAll("span").forEach(span => {
        span.classList.remove("active-list");
      });
  
      // Add the "active-list" class to the clicked projectSpan
      projectSpan.classList.add("active-list");
  
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
    form1.reset();
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
  main.appendChild(taskDiv);

  addButton.addEventListener("click", () => {
    border.classList.remove("active");
    handleAddTaskClick(project);
    form1.reset();
  });


  cancelButton.addEventListener("click", () => {
    border.classList.remove("active");
    form1.reset();
  });


  showProjectTasks(project); // Show the tasks for the project

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
  project.addTask(task); // Assuming you have a project instance
  allTasks.push(task);
  showProjectTasks(project)

}


function showProjectTasks(project) {
  const tasksDiv = document.getElementById("tasks");
  tasksDiv.innerHTML = ""; // Clear the existing tasks

  project.tasks.forEach((task, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("task");
    listItem.setAttribute("id", task.radio);

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

    taskSettings.addEventListener("click", () => {
      const main = document.getElementById("main");
      const border2 = document.createElement("div");
      border2.classList.add("border2");

      const borderDiv = document.createElement("div");
      borderDiv.classList.add("add-task-form");

      const form1 = document.createElement("form");
      form1.setAttribute("id", "task-form");

      const topAddTask = document.createElement("div");
      topAddTask.classList.add("top-add-task");

      const formTitle = document.createElement("h4");
      formTitle.textContent = "Edit Task";

      const closeFormBtn = document.createElement("i");
      closeFormBtn.classList.add("fas", "fa-times");

      closeFormBtn.addEventListener("click", () => {
      border2.classList.remove("active");
      form1.reset();
      });

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.id = "Title";
      titleInput.name = "Title";
      titleInput.placeholder = "Title";
      titleInput.maxLength = 25;
      titleInput.value = task.title;

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
      dueDateInput.value = task.dueDate;

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

        if (option === task.radio) {
          radioInput.checked = true; // Set the radio input as checked for the task's current priority
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

      const updateButton = document.createElement("button");
      updateButton.classList.add("btn");
      updateButton.id = "rename";
      updateButton.type = "button";
      updateButton.textContent = "Update";

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn");
      deleteButton.id = "delete";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        project.tasks.splice(index, 1);

        let allTasksIndex = allTasks.findIndex(t => t.title === task.title);

    // Remove task from allTasks array
        if (allTasksIndex !== -1) {
          allTasks.splice(allTasksIndex, 1);
        }

        listItem.remove();
        border2.classList.remove("active");
      });


      updateButton.addEventListener("click", () => {
        task.title = titleInput.value.trim();
        task.dueDate = dueDateInput.value;
      
        // Find the selected radio input within the task's settings form
        const selectedRadio = form1.querySelector("input[name='priority']:checked");
        if (selectedRadio) {
          task.radio = selectedRadio.value;
        }
      
        border2.classList.remove("active");
        showProjectTasks(project);
      });

  

      topAddTask.appendChild(formTitle);
      topAddTask.appendChild(closeFormBtn);
      dueDateDiv.appendChild(dueDateLabel);
      dueDateDiv.appendChild(dueDateInput);
      priorityDiv.appendChild(priorityLabel);
      priorityDiv.appendChild(importantsDiv);
      buttonsDiv.appendChild(updateButton);
      buttonsDiv.appendChild(deleteButton);

      form1.appendChild(topAddTask);
      form1.appendChild(titleInput);
      form1.appendChild(dueDateDiv);
      form1.appendChild(priorityDiv);
      form1.appendChild(buttonsDiv);

      borderDiv.appendChild(form1);
      border2.appendChild(borderDiv);

      main.appendChild(border2);
      border2.classList.add("active");
      });

      taskTitleDiv.appendChild(taskTitle);
      taskDueDate.appendChild(taskTime);
      taskTitleDiv.appendChild(taskDueDate);
      taskTitleDiv.appendChild(taskSettings);

      listItem.appendChild(taskTitleDiv);
      tasksDiv.appendChild(listItem);
    });
  }

  function showListTasks(allTasks, filter) {
    taskDiv.innerHTML = ""; // Clear the existing tasks
  
    let filteredTasks = allTasks;
    // If there is a filter, apply it
    if (filter) {
      filteredTasks = filterTasks(allTasks, filter);
    }
  
    filteredTasks.forEach((task) => {
      const listItem = document.createElement("div");
      listItem.classList.add("task");
      listItem.setAttribute("id", task.radio);
  
      const taskTitleDiv = document.createElement("div");
      taskTitleDiv.classList.add("task-title");

      const titleDoneDiv = document.createElement("div");
      titleDoneDiv.classList.add("titleDoneDiv");

      const taskDone = document.createElement("input");
      taskDone.type = "checkbox";
      taskDone.id = "done";
      taskDone.name = "done";
      taskDone.classList.add("radioDone");

  
      const taskTitle = document.createElement("span");
      taskTitle.textContent = task.title;

      if (taskDone.checked) {
        taskTitle.classList.add("taskTitle");
      } else {
        taskTitle.classList.remove("taskTitle");
      }
  
      taskDone.addEventListener('change', () => {
        if (taskDone.checked) {
          taskTitle.classList.add("taskTitle");
          taskTime.classList.add("time-done");
        } else {
          taskTitle.classList.remove("taskTitle");
          taskTime.classList.remove("time-done");
        }
      });
  

      titleDoneDiv.appendChild(taskDone);
      titleDoneDiv.appendChild(taskTitle);
  
      const taskDueDate = document.createElement("p");
  
      const taskTime = document.createElement("time");
      taskTime.textContent = task.dueDate;
  
      taskDueDate.appendChild(taskTime);
  
      taskTitleDiv.appendChild(titleDoneDiv);
      taskTitleDiv.appendChild(taskDueDate);
  
      listItem.appendChild(taskTitleDiv);
      taskDiv.appendChild(listItem);
    });
  
    return taskDiv;
  }

  function filterTasks(allTasks, filter) {
    const today = new Date();
    
    return allTasks.filter(task => {
      const taskDate = new Date(task.dueDate);
  
      const isSameDay = (date1, date2) => {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
      };
  
      switch (filter) {
        case 'Today':
          return isSameDay(taskDate, today);
        case 'Week':
          const weekStart = new Date(today);
          weekStart.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekStart.getDate() + 6); // End of the week (Saturday)
          return taskDate >= weekStart && taskDate <= weekEnd;
        case 'Month':
          return taskDate.getMonth() === today.getMonth() && taskDate.getFullYear() === today.getFullYear();
        case 'Year':
          return taskDate.getFullYear() === today.getFullYear();
        default:
          return true; // No filter or 'All Tasks' filter
      }
    });
  }
  
export default createSidebar;