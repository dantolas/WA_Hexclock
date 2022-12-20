


const clockSpan = document.querySelector("#clock");;
const hexClockSpan = document.querySelector("#hexClock");
date = new Date();

console.log("Script working.");
clockSpan.innerHTML = "12:00:00";
counter();


function counter() {
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours+":"+minutes+":"+seconds);
    clockSpan.innerHTML =  + hours+":"+minutes+":"+seconds;
    hexClockSpan.innerHTML ="#"+ decimalToHex(hours) + ":" + decimalToHex(minutes) + ":" + decimalToHex(seconds);
}

function decimalToHex(n){
    var hex = Number(n).toString(16);
    return hex;
}