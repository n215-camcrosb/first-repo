let wordArray = ["home", "about", "products", "contact"];

// export
export function changeRoute() {
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