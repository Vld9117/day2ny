
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");
    localStorage.setItem('theme', theme.href); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"


    if (localStorage.theme.getAttribute("href") == "./css/light-mode.css") {
        localStorage.theme.href = "./css/dark-mode.css";
        document.getElementById("switchMode").innerHTML = "Перейти в светлую тему";
        //localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    } else {
        localStorage.theme.href = "./css/light-mode.css";
        document.getElementById("switchMode").innerHTML = "Перейти в тёмную тему";
    }
}

let swMode = document.getElementsByClassName('switch-btn');
swMode.onclick = function() {
    swMode.toggleClass('switch-on');
    console.log("!");
};

// Работа с localStorage
//Добавляем или изменяем значение:
// localStorage.setItem('theme', 'default'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводим его в консоль:
// var localValue = localStorage.getItem('theme');
// console.log(localValue);

// localStorage["Ключ"] = "Значение" установка значения
// localStorage["Ключ"]  Получение значения
// delete localStorage["Ключ"]  Удаление значения
/*
Storage.key(n) — имя ключа с индексом n
Storage.getItem() — получить элемент
Storage.setItem() — записать элемент
Storage.removeItem() — удалить элемент
Storage.clear() — очистить хранилище
Storage.length — длина хранилища (количество элементов — пар ключ/значение)
*/

// //создадим объект
// var obj = {
// 	item1: 1,
// 	item2: [123, "two", 3.0],
// 	item3:"hello"
// };

// var serialObj = JSON.stringify(obj); сериализуем его

// localStorage.setItem("myKey", serialObj); запишем его в хранилище по ключу "myKey"

// var returnObj = JSON.parse(localStorage.getItem("myKey")) спарсим его обратно объект
