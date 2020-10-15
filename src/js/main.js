let ts = document.getElementById("theme-switch");
let tsl = document.getElementById("theme-switch-light");
let tsd = document.getElementById("theme-switch-dark");

ts.onclick = function() {
    if (tsl.className === "active") {
        tsl.className = "";
        tsd.className = "active";
        document.body.className = "dark";
    } else {
        tsl.className = "active";
        tsd.className = "";
        document.body.className = "light";
    }
};