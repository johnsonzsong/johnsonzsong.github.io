var newCursorDOM = document.createElement("div");
newCursorDOM.setAttribute("id", "customCursor");
document.body.appendChild(newCursorDOM);

var cursorDOM = document.getElementById("customCursor");

document.addEventListener("mousemove", (e) => {
  cursorDOM.style.top = e.clientY - 25 + "px";
  cursorDOM.style.left = e.clientX - 25 + "px";
});


var burger = document.querySelector(".burger");
var navLinkContainers = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links li");

var menuOpen = false;
burger.addEventListener('click', () => {
  console.log("CLICKED");
  if (!menuOpen) {
    burger.classList.add('open');
    menuOpen = true;
  } else {
    burger.classList.remove('open');
    menuOpen = false;
  }

  // Link animations
  navLinkContainers.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
        }s`;
    }
  });
})