function showClock() {
  // Declare Variables
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var day = time.getDay();
  var date = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  var meridian = hours > 12 ? "PM" : "AM";
  var daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "THURSDAY",
    "WEDNESDAY",
    "FRIDAY",
    "SATURDAY"
  ];
  var monthsOfYear = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  var currentDay = daysOfWeek[day];
  var currentMonth = monthsOfYear[month];
  if (hours > 12) {
    hours = hours - 12;
  }

  // Add Leading Zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var HrMinSec = hours + " : " + minutes + " : " + seconds;
  // Implementing values to DOM
  document.querySelector(".dayName").innerHTML = currentDay;
  document.querySelector(".HrMinSec").innerHTML = HrMinSec;
  document.querySelector(".merdian").innerHTML = meridian;
  document.querySelector(".month").innerHTML = currentMonth;
  document.querySelector(".today").innerHTML = date;
  document.querySelector(".year").innerHTML = year;
}
setInterval(() => {
  showClock();
}, 1000);
