let contentConatiner = document.getElementById("content-container");
const navbarContainer = document.getElementById("navbar-container");
let mobMenuContainer = document.getElementById("mob-menu-container");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let prevScroll = window.pageYOffset;
let logoNavbar = document.getElementById("logo-navbar");
// change navbar background color on scroll
window.addEventListener("scroll", function () {
  if(this.scrollY >600){
    navbarContainer.style.position = "fixed";
    navbarContainer.classList.add("nav-bar-scroll");
    logoNavbar.src="images/logo no bg.png";
  }else{
    navbarContainer.style.position = "absolute";
    logoNavbar.src="images/logo no bg white.png";
    navbarContainer.classList.remove("nav-bar-scroll");
  }
});


// when click on menu button, show mobile menu and hide navbar and content container
menuBtn.addEventListener("click", function () {
  mobMenuContainer.classList.remove("none");
  mobMenuContainer.classList.add("flex");
  navbarContainer.classList.add("none");
  contentConatiner.classList.add("none");
});
closeBtn.addEventListener("click", function () {
  mobMenuContainer.classList.add("none");
  mobMenuContainer.classList.remove("flex");
  navbarContainer.classList.remove("none");
  contentConatiner.classList.remove("none");
});
