/* First things to execute */
/*window.addEventListener("load", function() {
    alert("it's loaded !");
    console.log("loaded");
});*/
var activePage = window.location;
console.log(activePage);


function showMenu() {
    var menu = document.querySelector(".fa-bars");
    var links = document.querySelector(".links");
    var menu_times = document.querySelector(".fa-times");
    
    /* --- toggle elements --- */
    if(links.classList.contains("mobile-menu")) {
        menu_times.style.display = "none";
        menu.style.display = "block";
    }
    else {
        menu_times.style.display = "block";
        menu.style.display = "none";
    }

    links.classList.toggle("mobile-menu");
}