//скрипт рассчёта дней до Нового Года

function countDaysToNewYear() {
    var mounth, february, daysInYear, daysToNewYear, nowDay, yearToday;
    let a, b, c;
    //здесь должны использоваться данные из форм html-страницы
    yearToday = Number(document.getElementById("setYear").value);
    mounth = Number(document.getElementById("setMounth").value);
    nowDay = Number(document.getElementById("setDay").value);

    a = 0;
    b = 0;
    c = 0;
    february = 28;
    daysInYear = 365;

    //определение високосности года спасибо Никите Курлину от 30.01.2021
    if (yearToday % 400 == 0 || yearToday % 4 == 0 && yearToday % 100 !== 0) {
        february++;
        daysInYear++;
    };

    // определение числа обычных и уникальных прошедших месяцев года
    for (let i = 1; i < mounth; i++) {
        switch (i) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                a++;
                console.log('30');
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                b++;
                console.log('31');
                break;
            case 2:
                c++;
                console.log('февр');
                break;
        }
    };

    //кол-во дней до Нового Года с учётом високосности года
    daysToNewYear = daysInYear - ((31 * a) + (february * c) + (30 * b) + nowDay);

    document.getElementById("answer").innerHTML = daysToNewYear;
    document.getElementById("answer").style.display = "flex";
}

//функция запроса при переходе на другой сайт

function p() {
    if (confirm("перейти на другой сайт?")) {
        window.location.href = "https://vk.com/lampochka_elb"
    } else {
        alert("Вы нажали кнопку отмена")
    }
}

//определение координат мыши на экране 
function mouseCoords(e) {
    // Для браузера IE
    if (document.all) {
        x = event.x + document.body.scrollLeft;
        y = event.y + document.body.scrollTop;
        // Для остальных браузеров
    } else {
        x = e.pageX; // Координата X курсора
        y = e.pageY; // Координата Y курсора
    }
    document.getElementById("coords").innerHTML = "X : " + x + ", Y : " + y;
}