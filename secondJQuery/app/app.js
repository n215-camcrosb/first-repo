let wordArray = ["home", "about", "products", "contact"];


// function initListeners() {
//     let buttonID;

//     $("nav a").on("click", function (e) {
//         //buttonID = e.currentTarget.id;
//         buttonID = $(this).attr("id");
//         //console.log(buttonID);
//         console.log(wordArray[buttonID]);
//     })
// }

function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != "") {
        console.log(pageID);
        $.get(`pages/${pageID}/${pageID}.html`, function (data) {
            console.log("data " + data);
            $("#app").html(data);
        })
    }
    else {
        $.get(`pages/home/home.html`, function (data) {
            console.log("data " + data);
            $("#app").html(data);
        })
        console.log("home");
    }
}

function initURLListener() {
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function() {
    //initListeners();

    initURLListener();
})