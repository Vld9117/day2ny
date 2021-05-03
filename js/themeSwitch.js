let switchMode = document.getElementById("switchMode");
let theme = document.getElementById("theme");
//если в локалСторадж есть ключ, то мы присваиваем его теме,
//иначе определяем стандартное значение
if (localStorage.theme) {
  theme.href = localStorage.theme;
  if (localStorage.getItem("theme") === "./css/dark-mode.css") {
    document.getElementById("switchMode").innerHTML = "Светлая тема";
  }
} else {
  theme.href = "./css/light-mode.css";
  document.getElementById("switchMode").innerHTML = "Тёмная тема";
}

switchMode.onclick = function () {
  if (localStorage.getItem("theme") === "./css/light-mode.css") {
    theme.href = "./css/dark-mode.css";
    document.getElementById("switchMode").innerHTML = "Светлая тема";
    localStorage.theme = "./css/dark-mode.css";
  } else {
    theme.href = "./css/light-mode.css";
    document.getElementById("switchMode").innerHTML = "Тёмная тема";
    localStorage.theme = "./css/light-mode.css";
  }
};

