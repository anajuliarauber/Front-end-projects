const menu = document.querySelector(".menu");
const hiddenElements = document.querySelector(".hidden");
const nav = document.querySelector("nav");

menu.addEventListener("click", smallSideBar);
menu.addEventListener("click", displayDescription);

 function smallSideBar(){
    nav.classList.toggle("active");}

function displayDescription(){
    hiddenElements.classList.toggle("hidden")

}