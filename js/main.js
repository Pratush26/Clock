var ana1 = document.querySelector('.circle')
var h = document.querySelector('.ana2 .c:nth-child(3)')
for(i=0;i<11;i++){
  var html = `<p class="num">${i+1}</p>`
  ana1.innerHTML += html
  h.innerHTML += html
}
h.innerHTML += `<p class="num">12</p>`
var m = document.querySelector('.ana2 .c:nth-child(2)')
var s = document.querySelector('.ana2 .c:nth-child(1)')
for(i=0;i<60;i++){
  let html = `<p class="num2">${i}</p>`
  m.innerHTML += html;
  s.innerHTML += html;
}
var num = document.querySelectorAll('.num')
var num2 = document.querySelectorAll('.num2')
for(i=0;i<12;i++){
  num[i].style.cssText = 'transform: rotate('+30*i+'deg) translatey(-25vw) rotate('+-30*i+'deg)'
  num[i+12].style.cssText = 'transform: rotate('+30*i+'deg) translatey(-12vw) rotate(-90deg)'
}
for(i=0;i<60;i++){
  num2[i].style.cssText = 'transform: rotate('+6*i+'deg) translatey(-22.5vw) rotate(-90deg)'
  num2[i+60].style.cssText = 'transform: rotate('+6*i+'deg) translatey(-17.5vw) rotate(-90deg)'
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
  ana[0].style.transform = "rotate("+ minutes*6+"deg)"
  ana[1].style.transform = "rotate("+hours*30+"deg)"
  ana[2].style.transform = "rotate("+seconds*6+"deg)"
  date.innerHTML = `${dates}-${months}-${years}`
  day.innerHTML = `${dayName}`
  let ho = -hours*30+120
  let mi = -minutes*6+90
  let sec = -seconds*6+90
  h.style.transform = "rotate("+ho+"deg)"
  m.style.transform = "rotate("+mi+"deg)"
  s.style.transform = "rotate("+sec+"deg)"
  let se =seconds*2
  console.log(se,mi,sec)
}
realtime()
setInterval(realtime, 1000)


//h.style.transform = "rotate(60deg)"
/*

const boox = document.querySelector('.boox');
const rotatingElement = document.querySelector('.rotating-element');

function checkPosition() {
    const boxRect = boox.getBoundingClientRect();
    const elemRect = rotatingElement.getBoundingClientRect();

    const isInBox = elemRect.top >= boxRect.top &&
                    elemRect.bottom <= boxRect.bottom &&
                    elemRect.left >= boxRect.left &&
                    elemRect.right <= boxRect.right;

    if (isInBox) {
        rotatingElement.style.transform = 'translateX(-50%) scale(2)';
    } else {
        rotatingElement.style.transform = 'translateX(-50%) scale(1)';
    }
}

function animateElement() {
    let pos = -50;
    let direction = 1;
    const speed = 2;

    function step() {
        pos += speed * direction;
        rotatingElement.style.top = `${pos}px`;

        if (pos > box.clientHeight || pos < -50) {
            direction *= -1;
        }

        checkPosition();
        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

animateElement();
*/
