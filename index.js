console.log("this is project of digital clock");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const meridian = document.getElementById("AMPM");
// console.log(hours ,minutes ,seconds ,meridian)

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h>12){
        h = h - 12;
        ampm = "PM"
    }
    // for hours 
    if(h<10){
      h =  "0" + h
    }else{
        h
    }
    // for minutes
    if(m<10){
        m = "0" + m
    }else{
        m
    }
    // for seconds
    if(s<10){
        s = "0" + s
    }else{
        s
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    meridian.innerHTML = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock()
