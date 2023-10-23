import createProject from "./createProject";


function createSidebar(){

  // Create the <div> element with the id "sidebar"
const sidebarDiv = document.createElement("div");
sidebarDiv.setAttribute("id", "sidebar");

// Create the <ul> element with the id "list"
const listUl = document.createElement("ul");
listUl.setAttribute("id", "list");

// Create list items and add text content
const listItems = ["Tasks", "Today", "Week", "Month"];
listItems.forEach(itemText => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  if (itemText === "Tasks") {
    listItem.classList.add("active-list");
  }
  listUl.appendChild(listItem);
});

// Create the "project-titles" <div>
const projectTitlesDiv = document.createElement("div");
projectTitlesDiv.setAttribute("id", "project-titles");

// Create the <h2> element with the text "Add Projects"
const h2 = document.createElement("h2");
h2.textContent = "Add Projects";

// Create the <form> element with the class "form-input" and an empty action
const form = document.createElement("form");
form.classList.add("form-input");
form.setAttribute("action", "");

// Create the "+" button with class "btn-list" and aria-label
const plusButton = document.createElement("button");
plusButton.classList.add("btn-list");
plusButton.setAttribute("aria-label", "create new project");
plusButton.textContent = "+";



// Create the input element with type "text" and class "new-list" and placeholder
const input = document.createElement("input");
input.setAttribute("type", "text");
input.classList.add("new-list");
input.setAttribute("placeholder", "new project name");
input.setAttribute("aria-label", "new list name");

// Append the plus button and input field to the form
form.appendChild(plusButton);
form.appendChild(input);

// Append the h2 and form to the "project-titles" div
projectTitlesDiv.appendChild(h2);
projectTitlesDiv.appendChild(form);

// Create the <ul> element with the id "list-projects"
const listProjectsUl = document.createElement("ul");
listProjectsUl.setAttribute("id", "list-projects");

plusButton.addEventListener("click", () => {
  listProjectsUl.appendChild(createProject());
  
})



// Create list items for projects


// Append all the elements to the sidebar
sidebarDiv.appendChild(listUl);
sidebarDiv.appendChild(projectTitlesDiv);
sidebarDiv.appendChild(listProjectsUl);

// Add the sidebar to the document body or any other parent element as needed
return sidebarDiv;

}



export default createSidebar;