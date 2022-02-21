exports.onRouteUpdate = () => {
    // CURSOR
    var newCursorDOM = document.createElement("div");
    newCursorDOM.setAttribute("id", "customCursor");
    document.body.appendChild(newCursorDOM);

    var cursorDOM = document.getElementById("customCursor");

    document.addEventListener("mousemove", (e) => {
        cursorDOM.style.top = e.clientY - 25 + "px";
        cursorDOM.style.left = e.clientX - 25 + "px";
    });

    // // BURGER NAV
    var burger = document.querySelector(".burger");
    var navLinkContainers = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    var overlay = document.querySelector(".overlay");
    var menuOpen = false;
    navLinkContainers.classList.remove("nav-active");

    burger.addEventListener('click', () => {
        console.log("CLICKED");
        if (!menuOpen) {
            burger.classList.add('open');
            menuOpen = true;
            navLinkContainers.classList.add("open");
            overlay.classList.add("open");
        } else {
            burger.classList.remove('open');
            menuOpen = false;
            navLinkContainers.classList.remove("open");
            overlay.classList.remove("open");
        }
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                    }s`;
            }
        });
    })
}