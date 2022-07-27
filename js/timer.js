var count = 0;
var timerID = null;
var gettime;

onmessage = function (e){
    if(e.data == "start") {
        if(timerID != null)
            return;
        timerID = setInterval(myCallback,1000);
    }
    else if(e.data == "stop"){
        if(timerID == null)
            return;
        clearInterval(timerID);
        //essionStorage.setItem("누적학습시간", count);
        close();
    }
}

function myCallback() {
    count++;
    postMessage(count);
    //sessionStorage.setItem("누적학습시간", count);
}

function writetime(){
    sessionStorage.setItem("누적학습시간", count);
    gettime = sessionStorage.getItem("누적학습시간");
    console.log(gettime);
}

var time = 0;
var running = 0;
var showtime;
var studytime;
function start(){
    if (running==0) {
        running=1;
        increment();
    }
}
function stop(){
    if (running==1) {
        running=0;
    }
    sessionStorage.setItem("시간", studytime);
    gettime();
}
function increment(){
    if(running==1){
        setTimeout(function(){
            time++;
            var mins=Math.floor(time/10/60);
            var secs=Math.floor(time/10%60);
            var hours=Math.floor(time/10/60/60);
            var tenths = time%10;
            if(mins<10){
                mins = "0" + mins;
            }
            if(secs<10){
                secs = "0"+secs;
            }
            studytime = document.getElementById("output").innerHTML = hours+":"+mins+":"+secs+":"+tenths+"0";
            increment();
        },100)
    }
}

function gettime() {
    showtime = sessionStorage.getItem("시간");
    document.getElementById("writetime").innerHTML = "누적학습시간 " + showtime;

}