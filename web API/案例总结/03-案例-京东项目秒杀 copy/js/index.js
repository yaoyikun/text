
//-----------------页面秒杀部分开始-------------------------------------
//思路:
//写一个计时器,间隔时间是1秒钟.
//获取显示时间的span标签的文本
//修改文本的值
//把修改后文本的值重新赋给显示时间的span标签

//1.获取标签们
var spanHour = document.getElementById("spanHour"); //时标签
var spanMin = document.getElementById("spanMin"); //分标签
var spanSec = document.getElementById("spanSec"); //秒标签

//2.设置计时器
setInterval(function() {
  //2.1 获取显示时间的span标签的文本
  var hour = +spanHour.innerText; //时
  var min = +spanMin.innerText; //分
  var sec = +spanSec.innerText; //秒

  console.log(hour, min, sec);
  //2.2 修改文本的值
  sec--;
  if(sec < 0){
    sec = 59;
    min--;
  }
  if(min < 0){
    min = 59;
    hour--;
  }

  //2.3 把个位数时分秒 补全成 两位数
  sec = sec < 10 ? "0"+sec : sec;
  min = min < 10 ? "0"+min : min;
  hour = hour < 10 ? "0"+hour :hour;

  //2.4 把修改后文本的值重新赋给显示时间的span标签
  spanSec.innerHTML = sec;
  spanMin.innerHTML = min;
  spanHour.innerHTML = hour;
}, 1000);



//-----------------页面秒杀部分结束-------------------------------------
