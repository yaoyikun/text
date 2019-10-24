//--------------------------------------------
//缓动动画封装
//01-目标不定,可以到400,也可以到800
//02-做动画的元素不定,可以是one,也可以是two
//03-方向不定,可以回来
//04-做动画的属性不定
//05-做动画的属性有多个
//06-添加回调函数-动画做完了之后要做事情
//07-如果样式中有透明度和层级
function animateSlow(ele, attrs, fn) {
  //attrs是一个对象,里面就有很多个属性和属性要到达的目的地
  //设置新计时器前,也要清空一次计时器
  clearInterval(ele.timerId);
  //设置计时器
  ele.timerId = setInterval(function() {
    //声明一个变量,用来假设这一次移动,所有的属性都到达了目的地
    var flag = true;

    //遍历attrs,每一个属性都要做动画
    for (var key in attrs) {
      //判断一下当前这个属性是不是透明度
      //处理的思路: 放大100倍来处理,处理完了赋值的时候缩小100倍
      if (key == "opacity") {
        //获取要做动画的元素的样式值
        var currentLeft = getStyle(ele, key) * 100;
        //设置步长: (目标位置-当前位置)/10= 步长, 再取整
        var step = (attrs[key] * 100 - currentLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //计算
        currentLeft += step;
        //验证是不是所有的属性都到达了目的地
        if (currentLeft != attrs[key] * 100) {
          //假设失败
          flag = false;
        }
        //赋值
        ele.style[key] = currentLeft / 100;
        console.log("step:" + step + ":" + currentLeft);
      } else if (key == "z-index") {
        //如果当前做动画的是层级
        //思路:直接赋值
        ele.style[key] = parseInt(attrs[key]);
        console.log("z-index", attrs[key]);
      } else {
        //获取要做动画的元素的样式值
        var currentLeft = parseInt(getStyle(ele, key));
        //设置步长: (目标位置-当前位置)/10= 步长, 再取整
        var step = (attrs[key] - currentLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //计算
        currentLeft += step;
        //验证是不是所有的属性都到达了目的地
        if (currentLeft != attrs[key]) {
          //假设失败
          flag = false;
        }
        //赋值
        ele.style[key] = currentLeft + "px";
        console.log("step:" + step + ":" + currentLeft);
      }
    }

    //如果到了这里,flag的值还是true,说明刚才假设成功
    //继续说明所有的属性都到达了目的地,就应该清空计时器
    if (flag == true) {
      //到达目的位置了,就要清空计时器
      clearInterval(ele.timerId);
      //调用fn.
      if (Object.prototype.toString.call(fn) == "[object Function]") {
        fn();
      }
    }
  }, 20);
}

//获取元素样式写一个函数做兼容处理
function getStyle(ele, attr) {
  //获取ele元素的attr样式的值.
  //能力检测
  if (window.getComputedStyle) {
    //如果进到这里来,说明当前浏览器是支持getComputedStyle的
    return window.getComputedStyle(ele, null)[attr];
  } else {
    //如果进到这里来,说明当前浏览器是ie8及以前的.
    return ele.currentStyle[attr];
  }
}
