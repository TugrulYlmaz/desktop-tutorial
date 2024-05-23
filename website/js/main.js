const menu = document.querySelector(".nav__menu");
const menuButton = document.querySelector("#open-menu-button");
const closeButton = document.querySelector("#close-menu-button");


menuButton.addEventListener('click',  () => {
    menu.style.display = "flex";
    closeButton.style.display = "inline-block";
    menuButton.style.display = "none"; 
})