import {changePage} from "../services/services.js";


function initializeListeners() {
  console.log("init");
  $(window).on("hashchange", changePage);
  console.log("hash listener active");
  changePage();
  console.log("first page change");
}

$(document).ready(function () {
  initializeListeners();
})

