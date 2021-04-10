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
  if (yearToday % 400 == 0 || (yearToday % 4 == 0 && yearToday % 100 !== 0)) {
    february++;
    daysInYear++;
  }

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
        console.log("30");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        b++;
        console.log("31");
        break;
      case 2:
        c++;
        break;
    }
  }

  //кол-во дней до Нового Года с учётом високосности года
  daysToNewYear = daysInYear - (31 * a + february * c + 30 * b + nowDay);

  document.getElementById("answer").innerHTML = daysToNewYear;
  document.getElementById("answer").style.display = "flex";
}

function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

/* функция получения текущей даты и времени */
function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());
  var seconds = zero_first_format(current_datetime.getSeconds());

  return (
    day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
  );
}
setInterval(function () {
  document.getElementById("current_date_time_block2").innerHTML = date_time();
}, 1000);

function countDaysToNewYearFromDate() {
  var mounth, february, daysInYear, daysToNewYearFromDate, nowDay, yearToday;
  let a, b, c;
  a = 0;
  b = 0;
  c = 0;
  february = 28;
  daysInYear = 365;
  //здесь должны использоваться данные из форм html-страницы
  yearToday = Number(getFullYear());
  mounth = Number(getMonth());
  nowDay = Number(getDate());
  console.log(nowDay + ":" + mounth);

  msPerDay = 24*60*60*1000;

  if (yearToday % 400 == 0 || (yearToday % 4 == 0 && yearToday % 100 !== 0)) {
    february++;
    daysInYear++;
  }

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
        console.log("30");
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        b++;
        console.log("31");
        break;
      case 2:
        c++;
        break;
    }
  }
  //кол-во дней до Нового Года с учётом високосности года
  daysToNewYearFromDate =
  Math.round((nextDate.getTime() - today.getTime())/msPerDay);;
  
    document.getElementById("daysFromToday").innerHTML = daysToNewYearFromDate;
  document.getElementById("daysFromToday").style.display = "flex";
}

//функция запроса при переходе на другой сайт

function p() {
  if (confirm("перейти на другой сайт?")) {
    window.location.href = "https://vk.com/lampochka_elb";
  } else {
    alert("Вы нажали кнопку отмена");
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
