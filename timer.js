var sec = 0;
var min = 0;

document.getElementById("start").addEventListener("click", start);

function start() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("box").style.display = "block";
    document.getElementById("clock").style.display = "block";
    var x = setInterval(incSec, 1000);
    var y = setInterval(incMin, 60000);

    document.getElementById("submit").addEventListener("click", stop);
    function stop() {
        clearInterval(x);
        clearInterval(y);

        document.getElementById("box").style.display = "none";
        document.getElementById("clock").style.display = "none";
        document.getElementById("success").style.display = "block";
        document.getElementById("score").innerHTML = "Duration: " + min + " : " + sec;
    }
}

function incSec() {
    sec++;
    console.log("Sec", sec);
    document.getElementById('sec').innerHTML = sec;
    if (sec === 60) {
        sec = 0;
        document.getElementById('sec').innerHTML = sec;
    }
}

function incMin() {
    min++;
    console.log("Min", min);
    document.getElementById('min').innerHTML = min + " :";
}
