window.onload = function() {
  var config = [
    {
      width: 400,
      top: 20,
      left: 50,
      opacity: 0.2,
      "z-index": 2
    }, //0
    {
      width: 600,
      top: 70,
      left: 0,
      opacity: 0.8,
      "z-index": 3
    }, //1
    {
      width: 800,
      top: 120,
      left: 200,
      opacity: 1,
      "z-index": 4
    }, //2
    {
      width: 600,
      top: 70,
      left: 600,
      opacity: 0.8,
      "z-index": 3
    }, //3
    {
      width: 400,
      top: 20,
      left: 750,
      opacity: 0.2,
      "z-index": 2
    } //4
  ];

  //1.获取元素
  var wrap = document.getElementById("wrap"); //大盒子
  var arrow = document.getElementById("arrow"); //左右焦点盒子
  var lis = document.getElementById("slide").children[0].children; //所有li标签
  var arrLeft = document.getElementById("arrLeft"); //左边按钮
  var arrRight = document.getElementById("arrRight"); //右边按钮
  //2.显示隐藏左右焦点按钮
  wrap.onmouseover = function() {
    arrow.style.opacity = 1;
  };
  wrap.onmouseout = function() {
    arrow.style.opacity = 0;
  };

  //声明一个变量,用来描述能不能做动画.
  var flag = true; //如果为true,表示可以做动画

  //3.让每一个图片拥有各自的初始化样式(初始化样式在config这个数组中存着呢)
  showStyle();

  function showStyle() {
    for (var i = 0; i < config.length; i++) {
      animateSlow(lis[i], config[i],function(){
        //回调函数在动画执行完毕后执行. 
        flag = true;
      });
    }
  }

  //4.给右边焦点设置点击事件
  arrRight.onclick = function() {
    if (flag == true) {
      //把config这个数组里的最后一个删掉,添加到第一个
      config.unshift(config.pop());
      showStyle();

      //如果点了按钮,说明当前正在做动画.所以改成false,就让他下次点击没用.
      flag = false;
    }
  };

  //5.给左边焦点设置点击事件
  arrLeft.onclick = function() {
    if (flag == true) {
      //把config这个数组里的第一个删掉,添加到最后一个
      config.push(config.shift());
      showStyle();

      flag = false;
    }
  };
};
