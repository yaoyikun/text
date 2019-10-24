var spanHour=document.querySelector('#spanHour');
var spanMin=document.querySelector('#spanMin');
var spanSec=document.querySelector('#spanSec');

setInterval(function(){
    var hour=+spanHour.innerHTML;
    var min=+spanMin.innerHTML;
    var sec=+spanSec.innerHTML;




    sec--;
    if(sec<0){
        sec=59;
        min--;
    }
    if(min<0){
        min=59;
        hour--;
    }


    sec=sec<10?'0'+sec:sec;
    min=min<10?'0'+min:min;
    hour=hour<10?'0'+hour:hour;


    spanSec.innerHTML=sec;
    spanMin.innerHTML=min;
    spanHour.innerHTML=hour;


},1000)

