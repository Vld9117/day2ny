let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "./css/light-mode.css") {
        theme.href = "./css/dark-mode.css";
        document.getElementById("switchMode").innerHTML = "Перейти в светлую тему";
    } else {
        theme.href = "./css/light-mode.css";
        document.getElementById("switchMode").innerHTML = "Перейти в тёмную тему";
    }
}

let swMode = document.getElementsByClassName('switch-btn');
swMode.onclick = function() {
    swMode.toggleClass('switch-on');
    console.log("!");
};