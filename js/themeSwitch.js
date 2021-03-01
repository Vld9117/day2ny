let switchMode = document.getElementById("switchMode");
 //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"
var localValue = localStorage.setItem("theme", "./css/light-mode.css");
// switchMode.onclick = function () {
//   let theme = document.getElementById("theme");

//   if (theme.getAttribute("href") == "./css/light-mode.css") {
//     theme.href = "./css/dark-mode.css";
//     document.getElementById("switchMode").innerHTML = "Перейти в светлую тему";
//   } else {
//     theme.href = "./css/light-mode.css";
//     document.getElementById("switchMode").innerHTML = "Перейти в тёмную тему";
//   }


//   console.log(localStorage.getItem("theme"));
// };
  //попытка перемен
  switchMode.onclick = function () {
    let theme = document.getElementById("theme");
 

    if (localStorage.theme == "./css/light-mode.css") {
      theme.href = "./css/dark-mode.css";
      document.getElementById("switchMode").innerHTML =
        "Перейти в светлую тему";
      localStorage.theme = "./css/dark-mode.css";
    } else {
      theme.href = "./css/light-mode.css";
      document.getElementById("switchMode").innerHTML = "Перейти в тёмную тему";
      localStorage.theme = "./css/light-mode.css";
    }
    console.log(theme.href);
    console.log(localStorage.getItem("theme"));   
  }

  // document.getElementById('stat').onclick = function() {
  //   if(document.getElementById('stat').checked) {
  //     localStorage.setItem('stat', "true");
  //   } else {
  //     localStorage.setItem('stat', "false");
  //   }
  // }
  // if (localStorage.getItem('stat') == "true") {
  //   document.getElementById("stat").setAttribute('checked','checked');
  // }
// var localStorage.setItem("theme", "theme.href");
// console.log(localStorage.getItem("theme"));

// let swMode = document.getElementsByClassName("switch-btn");
// swMode.onclick = function () {
//   swMode.toggleClass("switch-on");
//   console.log("!");
// }
