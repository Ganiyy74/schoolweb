function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
   const  nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show'); //js css to display menu
        });
    }
};

showMenu('nav-toggle', 'nav-menu');


const navLink = document.querySelectorAll('.nav__link');

console.log({ navLink });

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show'); //When we click on each nav__link, we remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));