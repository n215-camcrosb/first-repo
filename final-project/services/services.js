let globalNav = document.getElementById("globalNav");
let navLogo = document.getElementById("navLogo");

export function loadPage() {
    let hashTag = window.location.hash;
    let pageToLoad = hashTag.replace("#", "");


    if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {
            $("#contentWrapper").html(data);

            if (pageToLoad === "home")
            {
                document.body.classList.add("home");
                navLogo.src = "images/logo/logo-white.png";
            }
            else
            {
                document.body.classList.remove("home");
                navLogo.src = "images/logo/logo-black.png";
            }
        })
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#contentWrapper").html(data);
            document.body.classList.add("home");
            navLogo.src = "images/logo/logo-white.png";
        })
    }
}