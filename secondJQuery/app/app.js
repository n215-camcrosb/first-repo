import {changeRoute} from "../model/model.js";
// type="module"

// function initListeners() {
//     let buttonID;

//     $("nav a").on("click", function (e) {
//         //buttonID = e.currentTarget.id;
//         buttonID = $(this).attr("id");
//         //console.log(buttonID);
//         console.log(wordArray[buttonID]);
//     })
// }


function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    //initListeners();

    initURLListener();
})