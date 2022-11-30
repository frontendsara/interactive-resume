window.addEventListener('DOMContentLoaded', main);

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

//spara, original burgermenu
/*let mainNav = document.getElementById("nav");
let navBarToggle = document.getElementById("hb-btn");*/

/*navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle("active");
});*/