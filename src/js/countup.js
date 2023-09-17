/*
* Basic Count Up from Date and Time Author: @mrwigster / https://guwii.com/bytes/count-date-time-javascript/
*/
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = (now - countFrom);

  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAHour = 60 * 60 * 1000;

  days = Math.floor(timeDifference / (secondsInADay) * 1);
  years = Math.floor(days / 365);
  if (years > 1){ days = days - (years * 365) }
  
  document.getElementById('age').innerHTML = years;
  // clearTimeout(countUpFromTime.interval);
  // countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}
