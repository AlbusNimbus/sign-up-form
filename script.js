const el = document.querySelector(".splash-container");
const body = document.getElementsByTagName("body")[0]


let mouseX = 0;
let mouseY = 0;
let pointerX = 0;
let pointerY = 0;
speed = 0.01;




document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
})
function shiftSplash() {
  let distX = mouseX - pointerX;
  let distY = mouseY - pointerY;
  pointerX = pointerX + (distX * speed);
  pointerY = pointerY + (distY * speed);
  el.style.backgroundPositionX = -pointerX / 25 + "px"
  el.style.backgroundPositionY = -pointerY / 25 + "px"
  requestAnimationFrame(shiftSplash);
}
shiftSplash();
