var timeoutID = setTimeout(function todayToNewYear() {
  var month, february, daysInYear, nowDay, yearToday, daysToNewYearFromDate;
  var d = new Date();
  let a, b, c, intervalID;
  yearToday = d.getFullYear();
  month = d.getMonth() + 1;
  nowDay = d.getDate();

  a = 0;
  b = 0;
  c = 0;
  february = 28;
  daysInYear = 365;
  

  if (yearToday % 400 == 0 || (yearToday % 4 == 0 && yearToday % 100 !== 0)) {
    february++;
    daysInYear++;
  }

  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        a++;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        b++;
        break;
      case 2:
        c++;
        break;
    }
  }
  //кол-во дней до Нового Года с учётом високосности года
  daysToNewYearFromDate =
    daysInYear - (31 * a + 30 * b + february * c + nowDay);
  document.getElementById("daysFromToday").innerHTML = daysToNewYearFromDate;
  document.getElementById("daysFromToday").style.display = "block";
  
  
}, 1000);

//ручной подсчёт дней до Нового года
function countDaysToNewYear() {
  var month, february, daysInYear, daysToNewYear, nowDay, yearToday;
  var d = new Date();
  let a, b, c;

  //здесь должны использоваться данные из форм html-страницы
  yearToday = Number(document.getElementById("setYear").value);
  month = Number(document.getElementById("setMounth").value);
  nowDay = Number(document.getElementById("setDay").value);

  a = 0;
  b = 0;
  c = 0;
  february = 28;
  daysInYear = 365;
  //стандартные значения при пустых полях
  if (yearToday == 0 && month == 0 && nowDay == 0) {
    yearToday = d.getFullYear();
    month = 1;
    nowDay = 1;
  }

  //определение високосности года спасибо Никите Курлину от 30.01.2021
  if (yearToday % 400 == 0 || (yearToday % 4 == 0 && yearToday % 100 !== 0)) {
    february++;
    daysInYear++;
  }
  // определение числа обычных и уникальных прошедших месяцев года
  for (let i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        a++;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        b++;

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

/* функция получения текущей даты и времени */
function zero_first_format(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

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

//функция запроса при переходе на другой сайт
function p() {
  if (confirm("перейти на другой сайт?")) {
    window.location.href = "https://vk.com/lampochka_elb";
  } else {
    alert("Вы нажали кнопку отмена");
  }
}
//очищает результат вычисления дней до НГ
function clr(){
  document.getElementById("answer").innerHTML = "&nbsp;";
}