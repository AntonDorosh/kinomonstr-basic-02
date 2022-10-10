
const checkpoint = 600;
let nav_bg = "transparent";
let opacity = 1;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll <= checkpoint) {
    nav_bg = "transparent";
    opacity = 1 - currentScroll / checkpoint;
  } else {
    nav_bg = "#000";
    opacity = 0;
  }
  document.querySelector('.header-nav').style.background = nav_bg;
  slides.forEach(slide => slide.getElementsByTagName('img')[0].style.opacity = opacity);
});


// show / hide mobile menu

const menu = document.querySelector('.mobile-btn');
const subMenu = document.querySelector('.second-menu-mobile');
let is_open = 0;

menu.addEventListener('click', () => {
  if(!is_open) {
    subMenu.style.display = 'block';
    is_open = 1;
  } else {
    subMenu.style.display = 'none';
    is_open = 0;
  }
})