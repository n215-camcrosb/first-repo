import {loadPage, hamburgerMenu} from "../services/services.js";


function initializeListeners() {
  $(window).on("hashchange", loadPage);
  loadPage();

  $("#hamburgerMenu").on("click", openHamburger);
}

$(document).ready(function () {
  initializeListeners();
});

function openHamburger() {
  console.log("open");
  hamburgerMenu.classList.toggle("openHamburger");
}

