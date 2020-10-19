const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set Initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((navItem) => navItem.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((navItem) => navItem.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenu();
  });
});

// const carousel = function (id) {
//   var box = document.querySelector(id + " .carouselbox");
//   var next = box.querySelector(id + " .next");
//   var prev = box.querySelector(id + " .prev");
//   var items = box.querySelectorAll(id + " .content li");
//   let counter = 0;
//   let amount = items.length;
//   let current = items[0];

//   box.classList.add("active");

//   function navigate(direction) {
//     current.classList.remove("current");
//     counter = counter + direction;
//     if (direction === -1 && counter < 0) {
//       counter = amount - 1;
//     }
//     if (direction === 1 && !items[counter]) {
//       counter = 0;
//     }
//     current = items[counter];
//     current.classList.add("current");
//   }
//   next.addEventListener("click", function (ev) {
//     navigate(1);
//   });
//   prev.addEventListener("click", function (ev) {
//     navigate(-1);
//   });
//   navigate(0);
// };

// carouselA = carousel("#carousel-a");
// // carouselB = carousel("#carousel-b");
