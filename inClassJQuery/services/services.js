// Shopping List array of objects here

export function changePage() {
    let hashTag = window.location.hash;
    let pageToLoad = hashTag.replace("#", "");

    if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {

            $("#app").html(data);
            console.log("injecting page.html");
        })
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#app").html(data);
            console.log("loading home");
        })
    }
}