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
                globalNav.className = "homeNav";
                navLogo.src = "images/logo/logo-white.png";
            }
            else
            {
                globalNav.className = "basicNav";
                navLogo.src = "images/logo/logo-black.png";
            }
        })
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#contentWrapper").html(data);
            globalNav.className = "homeNav";
            navLogo.src = "images/logo/logo-white.png";
        })
    }
}