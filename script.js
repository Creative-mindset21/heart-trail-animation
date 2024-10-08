const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const spanEl = document.createElement("span");
  const size = Math.random() * 100;

  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  spanEl.style.top = yPos + "px";
  spanEl.style.left = xPos + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
