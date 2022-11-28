
window.addEventListener('DOMContentLoaded', main);

function main(){
    addEventListeners();
}

function addEventListeners (){
    let navBarToggle = document.getElementById("hb-btn");
    navBarToggle.onclick = mainNav;
}

function mainNav (){
    let ul = document.querySelector("ul");
    ul.classList.toggle("active");
    
}

//spara, original burgermenu
/*let mainNav = document.getElementById("nav");
let navBarToggle = document.getElementById("hb-btn");*/

/*navBarToggle.addEventListener("click", function(){
    mainNav.classList.toggle("active");
});*/