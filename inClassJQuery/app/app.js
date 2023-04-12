import * as Services from "../services/services.js";

// Alter / Add to shopping list here


function initURLListener() {
    $(window).on("hashchange", Services.changePage);
    Services.changePage();
    console.log("change page");
}

$(document).ready(function() {
    initURLListener();
})