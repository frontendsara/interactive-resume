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
    setAvtiveNavItem(event);
    toggleNav();
}

function setAvtiveNavItem(event){
    const activeLI = document.querySelector("header nav li .setactive");
    activeLI?.classList.remove("setactive");
    const li = event.currentTarget;
    li.classList.add("setactive");
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