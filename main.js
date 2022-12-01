window.addEventListener("DOMContentLoaded", main);

/**Program starts */
function main(){
    addEventListeners();
    addOnscroll();
}

/**A function that handles the clicks on the webpage*/
function addEventListeners () {
    const navBarToggle = document.getElementById("hb-btn");
    navBarToggle.addEventListener("click", toggleNav);

    const listItems = document.querySelectorAll("header nav li");
    for (const li of listItems) {
        li.addEventListener("click", handleNavItemClick);
    }
}

/**Function who calls other functions */
function handleNavItemClick (event) {
    getToNavItem(event);
    toggleNav();
}

/**A function that will get us to the selected part of the menu*/
function getToNavItem(event){
    const activeLI = document.querySelector("header nav li");
    const li = event.currentTarget;
}

/**A function that reveals the options on the hamburger menu*/
function toggleNav (){
    const ul = document.querySelector("ul");
    ul.classList.toggle("active"); 
}

/**A function that gets the scroll activity */
function addOnscroll () {
    window.addEventListener("scroll", revealContent);
}

/**A function that fades in the content when scrolling up and down on the page*/
function revealContent () {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }else {
            reveals[i].classList.remove("active");
        }
    }
}