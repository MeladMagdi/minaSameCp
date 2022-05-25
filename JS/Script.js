var btn = document.getElementById("btn-open-window");
var MainNav = document.getElementById("main-nav-links"); 
var MainNavLink = MainNav.querySelectorAll("ul li a");
let Usermenubtn = document.getElementsByClassName("linkUser")[0];
let useractive = document.getElementById("ulUser");

btn.onclick = function () {
    MainNav.classList.toggle('active');
    if(MainNav.offsetWidth < 150) { /*For End Of Project Find Way To make 70 Is Dainamic*/
        setTimeout(function () {
            MainNavLink.forEach(e => {
                e.classList.add('disAnchor')
            })
        },200)
    }else {
        MainNavLink.forEach(e => {
            e.classList.remove('disAnchor')
        })
    }
}

Usermenubtn.onclick = () => {
    useractive.classList.toggle("activeUserMenu");
}

