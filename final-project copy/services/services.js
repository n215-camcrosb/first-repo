export function loadPage() {
    let hashTag = window.location.hash;
    let pageToLoad = hashTag.replace("#", "");


    if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {
            $("#contentWrapper").html(data);
        })
        console.log("page has changed");
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            console.log(data);
            $("#contentWrapper").html(data);
        })
    }
}