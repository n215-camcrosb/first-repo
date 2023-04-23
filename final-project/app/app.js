import {loadPage} from "../services/services.js";


function initializeListeners() {
  $(window).on("hashchange", loadPage);
  loadPage();
}

$(document).ready(function () {
  initializeListeners();
})

