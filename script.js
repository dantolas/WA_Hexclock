


const clockSpan = document.querySelector("#clock");
const hexClockSpan = document.querySelector("#hexClock");
const body = document.querySelector("#body");


console.log("Script working.");
clockSpan.innerHTML = "12:00:00";
counter();


function counter() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    clockSpan.innerHTML =  + hours+":"+minutes+":"+seconds;
    hexClockSpan.innerHTML ="#"+ decimalToHex(hours) + ":" + decimalToHex(minutes) + ":" + decimalToHex(seconds);
    console.log(clockToHex(hours,minutes,seconds));
    body.style.backgroundColor = clockToHex(hours,minutes,seconds);
    
    

}

function decimalToHex(n){
    var hex = Number(n).toString(16);
    return hex;
}

function clockToHex(hours,minutes,seconds){
    return "#"+hours.toString().padStart(2,'0')+minutes.toString().padStart(2,'0')+seconds.toString().padStart(2,'0');
};

window.setInterval(counter,1000);


