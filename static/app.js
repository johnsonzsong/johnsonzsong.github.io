const arrow = document.querySelector(".arrow");
const arrowContainer = document.querySelector(".arrowContainer");

TweenMax.to(arrow, 1.5, {
    y: "+=15px",
    yoyo: true,
    ease: Power4.yoyoEase,
    repeat: -1,
});

const y = arrowContainer.getBoundingClientRect().bottom;
arrowContainer.addEventListener("click", () => {
    console.log("Y:", y);
    window.scrollTo({ top: y });
});
