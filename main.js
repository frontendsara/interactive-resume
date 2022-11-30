window.addEventListener('DOMContentLoaded', main);
/**Program starts */
function main(){
    addEventListeners();  
}

function addEventListeners () {
    const navBarToggle = document.getElementById("hb-btn");
    navBarToggle.addEventListener("click", toggleNav);

    const listItems = document.querySelectorAll("header nav li");
    for (const li of listItems) {
        li.addEventListener("click", handleNavItemClick);
    }
}

function handleNavItemClick (event) {
    getToNavItem(event);
    toggleNav();
}

function getToNavItem(event){
    const activeLI = document.querySelector("header nav li");
    const li = event.currentTarget;
}

function toggleNav (){
    const ul = document.querySelector("ul");
    ul.classList.toggle("active");
    
}