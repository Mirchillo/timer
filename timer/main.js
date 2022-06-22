let hours = 0;
let minutes = 59;
let seconds = 58;

function zeroCount(n){
    return "0" + n;
}

let Seconds;
let Minutes;
let Hours;

let startButton = true;
let stopButton = false;
let resetButton = false;

function Start(){

    startButton = false;
    stopButton = true;
    resetButton = true;

    Buttons();  
    Hours = setInterval(() => {

        if(minutes == 60){
            hours++;

            minutes = 0;
        }

        if(hours > 9){
            document.getElementById("hours").innerHTML = hours;
        }else{
            document.getElementById("hours").innerHTML = zeroCount(hours);
        }
    }, 1)

    Minutes = setInterval(() => {
        document.getElementById("minutes").innerHTML = minutes;

        if(seconds == 60){
            minutes++;
            seconds = 0;
            document.getElementById("seconds").innerHTML = zeroCount(seconds);
        }

        if(minutes > 9){
            document.getElementById("minutes").innerHTML = minutes;
        }else{
            document.getElementById("minutes").innerHTML = zeroCount(minutes);
        }
    }, 1)

    Seconds = setInterval(() => {
        seconds++;
        document.getElementById("seconds").innerHTML = seconds;
    
        if(seconds >= 10){
            document.getElementById("seconds").innerHTML = seconds;
        } else {
            document.getElementById("seconds").innerHTML = zeroCount(seconds);
        }
    
    }, 1000)

}

function Stop(){

    stopButton = false;
    startButton = true;
    clearInterval(Hours);
    clearInterval(Seconds);
    clearInterval(Minutes);
    Buttons();
}

function Reset(){   
    hours = 0;
    minutes = 0;
    seconds = 0;

    document.getElementById("seconds").innerHTML = zeroCount(seconds);
    document.getElementById("minutes").innerHTML = zeroCount(minutes);
    document.getElementById("hours").innerHTML = zeroCount(hours);
    Buttons();
}

function Buttons(){
    if(startButton == false){
        document.getElementById("start").disabled = true;
    }else{
        document.getElementById("start").disabled = false;
    }

    if(stopButton == false){
        document.getElementById("stop").disabled = true;
    }else{
        document.getElementById("stop").disabled = false;
    }

    if(resetButton == false){
        document.getElementById("reset").disabled = true;
    }else{
        document.getElementById("reset").disabled = false;
    }
}
