webApi阶段(注意点)
----------------------------------------------            yaoyikun               -----------------------------------------------------------

DOM 
//________________________________________________________________________________
选择器操作

document.querySelectorAll('div');
// 返回值为伪数组,包含所有匹配选择器的DOM对象
// 没有匹配值得返回一个空伪数组,此数组具有length及index功能,但是不具有数组的方法

dom属性操作(点语法)
// dom元素属性的操作
// 点语法:   对象名.属性名
//          对象名.属性名=属性值
//          设置属性:
//              属性已经存在,则编辑该属性
//              属性不存在,则添加属性


// 删除属性:点语法无法删除属性,html标签标准的属性

常见属性操作
// class为js关键字,所以html中class属性在js中使用className代替


// style属性值是一个对象
// 通过style属性只能获取行内样式,无法获取到行外及内联样式
// 只是一个字符串,带有单位的字符串     style属性名使用驼峰命名法

表单元素操作
//表单元素有一些独特的属性,表示表单元素的两种状态(布尔类型)
//          - value:获取表单的元素值
//          - disabled:禁用
//          - checked:选中(单选radio复选checkbox);
//          - selected :选中(option)
//此类型属性在html中写了就是true  ,没写就是false,js通过布尔类型值来修改两种状态


事件交互
//js处理用户交互的一种机制
//DOM对象的事件,本质上就是一个属性而已,只不过事件属性的属性值只能是函数
//如果强行为事件属性添加非函数的值,会变成null

innerText注意
//innerText会将空格及缩进空字符串自动进行析构掉
//innerText会将html标签当做字符串一起放在标签中,不会进行解析html标签
//innerText属性可以将标签中子标签中的文本进行获取


textContent获取文本(新版)
//标准的w3c属性 ie8及ie8以前版本不支持 与innerText作用相同
//兼容处理
function getText(ele){
    //浏览器能力测试,打开当前代码的浏览器支持
    if(ele.textContent == undefined){
        //说明浏览器为ie8及ie8之前的
        return ele.innerText;
    }else{
        //说明当前浏览器为新版浏览器
        return ele.textContent;
    }
}


innerHTML注意
//innerhtml属性可以获取标签中所有的内容,包括子标签及换行符,空字符串
//innerHTML属性可以解析html标签

attribute属性操作
//获取属性:getAttribute('属性名')  --返回相应的属性值
//设置属性:setAttribute('属性名','属性值')  --无返回值
//删除属性:removeAttribute('属性名')  --无返回值


五大节点
//属性节点  元素节点  文本节点  注释节点  文档节点
//节点方法:
//获取子节点:父元素.childNodes      --使用节点:(元素节点,文本节点,注释节点)
//获取子元素:父元素.children        --使用元素:(元素节点)
//获取兄弟节点:
//              上一个节点:元素.previousSibling     下一个节点:元素.nextSibling
//获取兄弟元素:
//              上一个兄弟:元素.previousElementSibling
//              下一个兄弟:元素.nextElementSibling
//获取第一个子节点:父元素.firstChild    --(元素节点,文本节点,注释节点)
//获取第一个子元素:父元素.firstElementChild   --(元素节点)
//获取最后一个子节点:父元素.lastChild    --(元素节点,文本节点,注释节点)
//获取最后一个子元素:父元素.lastElementChild    --(元素节点)

//获取元素的父节点:子元素.parentNode

节点操作

// 创建节点:document.creatElement('标签名');
//          在内存中添加一个节点对象,但尚未添加到DOM树中;  需要appendChild()追加
//          创建节点的对象已经拥有了DOM的所有属性,可以通过语法设置和修改
// 追加节点:父元素.appendChild(新元素);
//          直接在父元素的子元素集合的最后追加一个新元素
//          若新元素是当前网页中已经存在的元素,就相当于将该元素调用到使用appendChild父元素的最后一个子元素
//插入节点:父元素.insertBefore(新元素,指定节点);   直接在父元素的子元素集合的指定节点前面插入一个新元素
//          注意:插入节点只有insertBefore()插入之前  没有insertAfter,注意这不是个方法
//替换节点:父元素.replaceChild(新元素,旧元素);
//          参数一:新元素   参数二:旧元素    注意:若新元素为html中已经存在的元素,则会把该元素移动到旧元素的位置,并将旧元素删除
//删除节点:父元素.removeChild(子元素);    直接通过父元素删除子元素
//          注意点:元素自身无法进行自杀,即自己删除自己
//克隆节点:需克隆元素.cloneNode()
//          会克隆一个元素,但是这个克隆的元素只存在于内存,需追加
//          克隆参数:
//                  参数是布尔类型,如果不给参数,默认是false
//                  参数位true  ,深克隆 ,会克隆元素内容
//                  参数位false  ,浅克隆 ,不会克隆元素内容

DOM工具
//___________________________________________________________________________--
setInterval()
//计时器setInterval(参数1,参数2);    反复执行
//参数1:执行代码(可以是一个匿名函数,可以时一个实现准备好的函数)
//参数2:间隔时间,毫秒级
//返回值:为number类型,意思是计时器ID;  常用参数timerId

clearInterval(timerId)
//停止暂停计时器方法

setTimeout()
// 计时器setTimeout(参数1,参数2);    执行一次
//参数1:执行代码(可以是一个匿名函数,可以使一个实现准备好的函数)
//参数2:间隔时间/等待时间  毫秒级
//返回值:为number类型,意思是计时器ID

clearTimeout(timerId)
// 停止暂停计时器

setInterval与setTimeout区别
// setInterval()会一直执行,setTimeout()只会执行一次


webApi三大家族:offset家族  scorll家族  client家族

offset           (元素的属性)
//offsetwidth:元素的宽,包括padding和border(可以获取设置行内及内嵌式width)
//offsetHeight:元素的高,包括padding和border(可以获取设置行内及内嵌式height)
//对比效果:style.width/style.height拿不到内嵌式的宽高

//offsetParent  定位父级  代表距离这个元素最近的定位父元素
//注意:(了解即可)
//      1.如果元素自己是固定定位,则它的offsetParent是null;
//      2.如果元素自己没有固定定位,它的所有父元素也没有定位,那他的offsetParent就是body
//      3.body的offsetParent是null;
//offsetLeft:元素的左外边框距离自己的定位父级的左内边框的距离
//offsetRight:元素的有外边框距离自己的定位父级的右内边框的距离

scroll         (元素属性)
//scrollWidth:元素内容的宽(包括padding)
//scrollHeight:元素内容的高(包括padding)
//scrollLeft:元素内容滚出去(卷曲)的宽
//scrollTop:元素内容滚出去(卷曲)的高

滚动事件  onscroll  

client         (元素属性)
// clientWidth:元素可视区宽(包括padding)
// clientHeight:元素可视区高(包括padding)  
//clientLeft:左边框宽
//clientTop:上边框宽


获取页面的可使区宽高     clientWidth  clientHeight
//onresize事件 尺寸改变事件
window.onresize=function(){
    console.log('大小改变');
    //拿到页面可视区宽高
    console.log(getPageClient().clientWidth,getPageClient(),clientHeight);
}
//获取页面的可视区宽高,有兼容性,所以封装一个函数
function getPageClient(){
    return{
        clientWidth:window.innerWidth  ||
        document.documentElement.clientWidth ||
        document.body.clientWidth  ||
        0,
        clientHeight:window.innerHeight  ||
        document.documentElement.clientHeight  ||
        document.body.clientHeight  ||
        0
    }
}


利用clientWidth模拟响应式布局
window.onresize=function(){
    var pWidth=getPageClient().clientWidth;
    if(pWidth>=1200){
        document.body.style.backgroundColor='red';
    }else if(pWidth>=800){
        document.body.style.backgroundColor='green';
    }else if(pWidth>=600){
        document.body.style.backgroundColor='pink';
    }else if(pWidth>=400){
        document.body.style.backgroundColor='yellow';
    }else{
        document.body.style.backgroundColor='blue';
    }
}



DOM事件
//__________________________________________________________________________-
事件对象
//不管哪个事件被触发,都会有个对象产生,记录这个事件触发时的一些信息
//获取事件对象
//谷歌/火狐   事件参数e
//ie老浏览器   window.event
事件对象的兼容处理
e=e||window.event;

事件对象的三个坐标
// e.clientX  页面可视区左上角距离触发事件哪一点的水平x距离
// e.clientY  页面可视区左上角距离触发事件哪一点的垂直y距离

//e.screenX  屏幕左上角距离触发事件哪一点的水平x距离
//e.screenY  屏幕左上角距离触发事件哪一点的垂直Y距离

//e.pageX  页面左上角距离触发事件那一点的水平x距离
//e.pageY  页面左上角距离触发事件那一点的水平y距离
pageX/Y的兼容处理
//由于e.pageX在老浏览器中直接拿不到值
function getEventPageXY(e){
    e=e||window.event;
    return {
        pageX:e.clientX+document.documentElement.scrollLeft,
        pageY:e.clientY+document.documentElement.scrollTop
    }
}


拖拽
//h5新增拖拽属性 draggable  值为true和false   true表示具有可拖拽能力    img标签默认可以拖拽

新增拖拽事件
//1.ondragstart 元素刚被拖拽的时候触发
//2.ondrag  元素拖拽中触发
//3.ondragend  拖拽结束触发

容器盒子的拖拽事件
//1.ondragenter  有元素拖到容器盒子中(根据鼠标位置判断有没有拖进来)
//2.ondragleave  元素拖拽离开
//3.ondragover  元素在容器中拖拽盒子移动(调用频繁)  存在意义就是为了ondrop
//4.ondrop   元素容器中结束拖拽  一定要在ondragover这个事件中,阻止默认行为
// 拖拽事件使用方法
container.ondragenter = function(){
    console.log('进来了...');
}
//2. 
container.ondragleave = function(){
    console.log('离开了...');
}
//3. 
container.ondragover = function(e){
     e.preventDefault();//阻止默认行为
    console.log('移动中...');
}
//4. 一定要在ondragover这个事件中,阻止默认行为.
container.ondrop = function(){
    console.log('结束拖拽...');
}


注册事件(addEventListener)
// on + 事件名称   缺点:给同一元素注册同一事件,后面的会把前面的覆盖
// 元素名.addEventListenter(参数1,参数2,参数3);
//参数1:你要添加的事件名  "click"
//参数2:事件处理程序  ,可以使一个匿名函数,也可以是一个实现准备好的函数
//参数3:是一个布尔类型值,不给默认false   false就是支持冒泡  true就是支持捕获
事件注册的兼容处理
addEventListener()方法ie8不支持
ie8支持语法:元素名.attachEvnet('onclick',function);
//兼容函数
function addEvent(obj,type,fn){
    //能力检测
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else{
        obj.attachEvnet('on'+type,fn);
    }
}

移出事件(removeEventListener)
//on注册  移出方法 将注册赋值null  one.onclick=null;
//addEventListener注册事件,使用removeEventListener移出
事件移出的兼容处理
ie8  attachEvnet注册事件的移出   detachEvent()移出
//兼容函数
function removeEvent(obj,type,fn){
    //能力检测
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else{
        obj.detachEvent('on'+type,fn);
    }
}


事件冒泡(从里到外)
// 事件从目标节点开始向外触发事件知道最终的父节点，自下而上
//某个元素的某个事件被触发,那这个元素的所有父元素的同名事件都会被触发,这就是事件冒泡
// 事件冒泡：从事件源朝父级一直到根元素（HTML）。当某个元素的某类型事件被触发时，那么它的父元素同类型的事件也会被触发，一直触发到根源上；
阻止事件冒泡
e.stopPropagation();
window.event.cancelBubble=true;  //ie8及以前浏览器支持

事件捕获(从外到里)
//事件捕获和事件冒泡刚好相反是事件流向外至内传递
// 从根元素（HTML）到事件源，当某个元素的某类型事件被触发时，先触发根元素的同类型事件，朝子一级触发，一直触发到事件源。
事件的三个阶段
// e.eventPhase 就能输出当前处于什么阶段
//输出值为1  捕获阶段
//输出值为2  目标阶段
//输出值为3  冒泡阶段

事件监测
// e.type能够获取当前事件名称


阻止a标签的默认跳转
//1.给a标签的href属性设置值:  javaScript:void(0)     void(0)的意思就是由js控制,不需要跳转
//2.给a标签的注册事件 添加   return false;
//3.使用事件对象     e.preventDefault();阻止默认跳转



键盘事件
//onkeydown  键盘按下事件
//onkeyup    键盘弹起事件
键盘按键识别  e.keyCode
// 兼容键盘事件按键识别函数
document.onkeyup=function(e){
    e = e||window.event;
    var key =e.keyCode  ||e.which   ||e.charCode;
    console.log(key);
}







DOM动画封装
//____________________________________________________________________________
匀速动画
//传入参数1:元素  参数2:目标位置
function animate(ele,target) {
    //清除计时器:避免反复加速,计时器层叠
    clearInterval(timerId);
    // 设置计时器 声明计时器Id,参数1位匿名函数或者事先准备好的函数,参数2位计时时间:毫秒级
    ele.timerId=setInterval(function(){
        //获取当前的left值
        var currentLeft=ele.offsetLeft;
        //声明一个变量表示步长
        var step=target>currentLeft?9:-9;
        //计算移动后位置
        currentLeft+=step;
        //判断步长是否大于目标值-当前值
        if(Math.abs(target-currentLeft)<Math.abs(step)){
            // 大于则赋值元素当前的left值等于目标值
            ele.style.left=target+'px';
            // 清空当前计时器
            clearInterval(ele.timerId);
        }else{
            // 小于等于当前值
            ele.style.left=currentLeft+'px';
        }
    },50);
}



缓动动画
//封装需求
//01 目标不定,
//02 做动画的元素不定
//03 方向不定,可以缓动回来
//04 做动画的属性不定
//05 做动画的属性有多个
//06 添加回调函数-动画做完之后要做的事情
//07 如果样式里中有opacity透明度及z-index层级
function animateSlow(ele,attrs,fn){  //attrs 是一个对象属性值及目的地  top:800
    //设置新的计时器前,也要清空计时器
    clearInterval(ele.timerId);
    //设置新的计时器
    ele.timerId=setInterval(function(){
        //声明变量,用来假设这一次移动,所有属性都到达了目标位置
        var flag=true;
        //遍历attrs 每一个属性都要做动画
        for(var key in attrs){
            //判断一下当前属性是不是透明度
            //处理思路:放大100倍处理,处理完缩小100倍
            if(key=='opacity'){
                //获取要做动画的元素样式值
                var currentLeft=getStyle(ele,key)*100;
                //设置步长:(目标位置-当前位置)/10=步长,再取整
                var step=(attrs[key]*100-currentLeft)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                //计算
                currentLeft+=step;
                //验证是不是所有属性都到达了
                if(currentLeft!=attrs[key]*100){
                    //假设失败
                }
                //赋值
                ele.style[key]=currentLeft/100;
                console.log("step:"+step+':'+currentLeft);
            }else if(key=='z-index'){
                //如果当前的动画是层级
                //思路:直接赋值
                ele.style[key]=parseInt(attrs[key]);
                console.log('z-index',attrs[key]);
            }else{
                var currentLeft=parseInt(getStyle(ele,key));
                var step=(attrs[key]-currentLeft)/10;
                step=step>0?Math.ceil(step):Math.floor(step);
                currentLeft+=step;
                //验证是不是所有属性都到达目的地
                if(currentLeft!=attrs[key]){
                    //假设失败
                    flag=false;
                }
                //赋值
                ele.style[key]=currentLeft+'px';
            }

        }
        //如果到了这里,flag值还是true,说明假设成功
        //继续说明所有属性都到达了属性值目的地,就应该清空计时器
        if(flag==true){
            clearInterval(ele.timerId);
            //调用fn
            if(Object.prototype.toString.call(fn)=='[object Function]'){
                fn();
            }
        }
    },50);
}
// 获取元素样式函数兼容处理
function getStyle(ele,attr){
    if(window.getComputedStyle){
        //如果进入这里,说明浏览器支持getComputedStyle
        return window.getComputedStyle(ele,null)[attr];
    }else{
        //如果进到这里,说明浏览器是ie8及以前的
        return ele.currentStyle[attr];
    }
}




BOM
//____________________________________________________________________________________________________
window对象
//即浏览器窗口

window常用方法  open();close();
// window.open(参数1,参数2,参数3):打开一个窗口
//          参数1:url路径 要打开的窗口网址   "www.163.com""
//          参数2:target属性,即_blank/_self  当前窗口打开还是新开窗口  "_blank"
//          参数3:新窗口特征:大小和位置(_blank才有效)    "width=800,height=600,top=100,left=200"
//          return  新打开的window对象

// window.open(" ","_self").close() :关闭一个窗口
// url不是空字符串,而是一个空格字符串
//为防止window.close();在谷歌/火狐浏览器会自动拦截出现异常,js实现需将假装在当前窗口打开自己,然后在关闭自己


window入口函数
//window.onload:界面上所有内容加载完毕后触发这个事件
//js代码在<head></head>标签内是需使用window.onload=function(){}  js代码执行顺序从上到下


window.location 
//location对象
//location属性
//语法:location.href=包含完整的网址路径   实现网页跳转
//location方法
//location.assign(网址)  --跳转页面,修改地址栏的网址  接受一个网址字符串作为参数,使得浏览器提个跳转到新的网址
//                  location.assign(网址)等同于window.location.href='网址';
//location.replace(网址)  --用网址指向的页面替换当前页面  接受一个网址字符串作为参数,使得浏览器立刻跳转到新的网址
//                  与location.assign()不同之处是此方法会在浏览器历史  Hietory  里面删除当前网址
//location.reload()  --刷新页面   使得浏览器重新加载当前网址,相当于按下浏览器的刷新按钮

window.history
//history对象:主要记录你当前的窗口历史记录  作用就是前进和后退网页
//history方法
//history.forward();前进
//history.back();后退

window.navigator
//navigator对象:包含当前浏览器的信息,可以通过navigator.userAgent返回值进行判断当前用户的浏览器信息


window.localStorage
//localStorage为本地储存,将数据存储到浏览器
//语法:
//      存:  localStorage.setItem('属性名','属性值');
//      取:  localStorage.getItem('属性名');
//      删:  localStorage.removeItem('属性名');
//      清空:localStorage.clear();
//注意点:存储的数据只能是字符串类型,如果是其他类型则会自动调用1toString()方法转换成字符串类型
//      永久储存.除非自己进行删除,否则一致存在于浏览器
//也可以使用点语法进行数据存储


window.sessionStorage
//sessionStorage为临时存储,关闭浏览器就会结束储存,用法与localStorage一致  存取删清
//与localStorage区别为HP值不同(存储系数);



----------------------------------------------            yaoyikun               -----------------------------------------------------------