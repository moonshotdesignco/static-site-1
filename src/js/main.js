let tsBtn = document.getElementById("theme-switch");
let tsLblLi = document.getElementById("theme-switch-label-light");
let tsLblDa = document.getElementById("theme-switch-label-dark");

tsBtn.onclick = function() {
    if (document.body.className == "light") {
        document.body.className = "dark";
        tsLblLi.classList.remove("active");
        tsLblDa.classList.add("active");
    } else {
        document.body.className = "light";
        tsLblLi.classList.add("active");
        tsLblDa.classList.remove("active");
    }
};

function setTheme() {
    document.body.className = "light";
    tsLblLi.classList.add("active");
}

setTheme();