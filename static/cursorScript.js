var newCursorDOM = document.createElement("div");
newCursorDOM.setAttribute("id", "customCursor");
document.body.appendChild(newCursorDOM);

var cursorDOM = document.getElementById("customCursor");

document.addEventListener('mousemove', e => {
  cursorDOM.style.top = e.clientY - 25 + "px";
  cursorDOM.style.left = e.clientX - 25 + "px";
});