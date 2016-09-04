var open = document.querySelector(".open-form");
var popup = document.querySelector(".modal-content");

open.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("modal-content-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});
