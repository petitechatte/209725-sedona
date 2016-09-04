var open = document.querySelector(".open-form");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var checkIn = popup.querySelector("[name=check-in]");
var checkOut = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

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

 form.addEventListener("submit", function(event) {
        event.preventDefault();
});
