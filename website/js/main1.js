var menuBar = document.querySelector('#menu_bar');
var menuBar = document.querySelector('.nav_links');

 navLinks.style.top = '-450px'

 menuBar.onclick = function () {
    if (navLinks.style.top == '-450px'){
        navLinks.style.top = '50px';
    } else {
        navLinks.style.top = '-450px'
    }
 }