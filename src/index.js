import createSideBar from './modules/sidebar';
import createMain from './modules/main';


const content = document.querySelector(".content");

function createHeader() {
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "header");
  const headerTitle = document.createElement("h1");
  headerTitle.classList.add("title");
  headerTitle.textContent = "To-Do";

  headerDiv.appendChild(headerTitle)

  return headerDiv
}


function createTheDom() {

  content.appendChild(createHeader());
  content.appendChild(createSideBar());
  content.appendChild(createMain());

}

createTheDom();