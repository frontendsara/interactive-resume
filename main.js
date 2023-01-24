// Listen for DOM content to be loaded
document.addEventListener("DOMContentLoaded", main);

/**Program starts */
function main(){
    addEventListeners();
    addOnscroll();
}

/**A function that handles the clicks on the webpage for the hamburger menu and scrolling */
function addEventListeners () {
    const navBarToggle = document.getElementById("hb-btn");
    navBarToggle.addEventListener("click", toggleNav);

    const listItems = document.querySelectorAll("header nav li");
    for (const li of listItems) {
        li.addEventListener("click", handleNavItemClick);
    }

    let reveals = document.querySelectorAll(".reveal");
    if(!('IntersectionObserver' in window)) {
      window.addEventListener("scroll", revealContent);
    } else {
      let observer = new IntersectionObserver(revealContent);
      reveals.forEach(reveal => {
        observer.observe(reveal);
      });
    }
}

/**Function who calls other functions to the hamburger menu*/
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

/**A function that fades in the content when scrolling up and down on the page*/
function revealContent (entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("active");
      }else {
        entry.target.classList.remove("active");
      }
    });
}