window.onscroll = function() {myfuntion()};

var navBar = document.getElementById('navbar');
var sticky = navBar.offsetTop;

function myfuntion() {
    if(window.pageYoffset >= sticky) {
        navBar.classList.remove("sticky");
    }
    else{
        navBar.classList.remove("sticky");
    }
}



let menu = document.querySelector('#menuBar');
let navbar = document.querySelector('.navmenu');

menu.onclick = () => {
    navbar.classList.toggle('open');
}