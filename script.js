var hour = document.querySelector('#hour');
var minute = document.querySelector('#minute');
var second = document.querySelector('#second');
var elClock = document.querySelector('#el_clock');

function clock() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var hrPosition = hr * 360 / 12 + ((min * 360 / 60) / 12);
  var minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
  var secPosition = sec * 360 / 60;

  hour.style.transform = "rotate(" + hrPosition + "deg)";
  minute.style.transform = "rotate(" + minPosition + "deg)";
  second.style.transform = "rotate(" + secPosition + "deg)";

 corektTime(hr, min, sec);
}

function corektTime(h, m, s) {
  h = (h < 10) ? '0' + h : h,  
  m = (m< 10) ? '0' + m : m,  
  s = (s < 10) ? '0' + s : s, 
  elClock.innerText = h + ':' + m + ':' + s;
}

setInterval(clock, 1000);
