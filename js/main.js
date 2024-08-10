
var ana1 = document.querySelector('.circle')
for(i=0;i<11;i++){
  let html = `<span class="num">${i+1}</span>`
  ana1.innerHTML += html
}
var num = document.querySelectorAll('.num')
for(i=0;i<12;i++){
  num[i].style.cssText = 'transform: rotate('+30*i+'deg) translatey(-25vw) rotate('+-30*i+'deg)'
}
var day = document.querySelector('.day')
var date = document.querySelector('.date')
var box = document.querySelectorAll('.box')
var ana = document.querySelectorAll('.b')
function realtime(){
  let now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayName = daysOfWeek[now.getDay()];
  let dates = now.getDate()
  let months = now.getMonth()+1
  let years = now.getFullYear()
  box[0].innerHTML = `${hours}`
  box[1].innerHTML = `${minutes}`
  box[2].innerHTML = `${seconds}`
  box[3].innerHTML = `${hours<13?hours:hours%12}`
  box[4].innerHTML = `${minutes}`
  box[5].innerHTML = `${seconds}`
  box[6].innerHTML = `${hours<13?"AM":"PM"}`
  ana[0].style.transform = "rotate("+minutes*6+"deg)"
  ana[1].style.transform = "rotate("+hours*30+"deg)"
  ana[2].style.transform = "rotate("+seconds*6+"deg)"
  date.innerHTML = `${dates}-${months}-${years}`
  day.innerHTML = `${dayName}`
}
realtime()
setInterval(realtime, 1000)
