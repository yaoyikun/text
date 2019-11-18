ajax 复习总结


基本ajax介绍及工作流程
//_____________________________________________________________________________
什么是ajax?
ajax就是让浏览器根服务器交互的一套API,他的作用是可以让浏览器和服务器进行交互
在不刷新页面前提下向服务器发送请求数据
ajax   “Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术

访问服务器的几种方式
1.直接访问浏览器的方式
2.使用a标签的href属性
3.使用window.location.href

ajax的工作流程
1.创建XMLHttpRequest对象  (小黄人对象)   var xhr = new XMLHttpRequest();
2.设置请求方式及访问路径        xhr.open('get', 'https://autumnfish.cn/api/joke');
3.发送请求   xhr.send();
4,注册回调函数  
    这个函数并不是立即执行,而是等待服务器返回数据时才会执行
    xhr.onload = function () {console.log(xhr.responseText);}


ajax请求
//______________________________________________________________________________
接口--Web服务器提供  让ajax请求的网络地址  API


get请求
 // 1.实例化ajax对象
 var xhr = new XMLHttpRequest();
 // 2.设置请求方法和地址
 // get请求的数据直接添加在url的后面 格式是 url?key=value
 xhr.open('get', 'https://autumnfish.cn/api/hero/simple?name=亚索');
 // 3.发送请求
 xhr.send();
 // 4.注册回调函数
 xhr.onload = function () {
     alert(xhr.responseText)
 };


 post请求

 与get请求不同之处
 1.传参不同
    get请求参数直接在url后拼接     url?key=value
    post请求参数不能写在url,需要在send方法中传参  xhr.send('key=value')
2.post请求需要设置请求头,post请求才需要设置,这是固定格式语法,粘贴复制
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

post请求
 //3.ajax发送请求
//(1).实例化ajax对象
var xhr = new XMLHttpRequest();
//(2).设置请求方法和地址
xhr.open('post', 'https://autumnfish.cn/api/user/register');
//(3).设置请求头（post请求才需要设置）
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
//(4).发送请求 ： 参数格式  'key=value'
xhr.send('username=' + username);
//(5).注册回调函数
xhr.onload = function () {
    $('.info').text(xhr.responseText);
};


json数据格式解析
//_________________________________________________________________________________
通用语言数据传输的数据格式

1.json是一种数据格式  本质是字符串
    作用  解决跨平台问题,一般返回的数据都是json格式
2.json格式特点
    a.属性名和属性值都是字符串  需要使用双引号包括
    b.如果属性值是布尔类型和数字类型,则可以省略字符串
3,json格式与js对象格式互转
    json -- js     JSON.parse(json格式)
    js   --json   JSON.stringify(js对象)

var jsonArr ='{"name":"jack","friend":"肉丝"}'



ajax 请求函数封装  重点掌握jq使用
//___________________________________________________________________________________
ajax多参数传递

1.多参数传递格式      key1=valu1&key2=value2
    a.多个参数之间使用$符号隔开
    b.参数之间不能有空格
2.post多参数传递格式与get是一致的,只要参数放在send()方法中而已;

原生js封装函数
/**
 * @description: 3.ajax请求
 * @param {type} 对象的方式传参
    {
        url:请求地址
        method:请求方法
        data:请求参数
        success：请求回调  function(data){ data:服务器返回的数据 }
    }
 */
function ajax(obj) {
    //(1).实例化ajax对象
    var xhr = new XMLHttpRequest();
    if (obj.method == 'get') {
        //(2).设置请求方法和地址
        xhr.open(obj.method,obj.url + '?' + obj.data);
        xhr.send();
    } else {
        //(2).设置请求方法和地址
        xhr.open(obj.method,obj.url);
        //(3).设置请求头（post请求才需要设置）
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        //(4).发送请求 ： 参数格式  'key=value' 
        xhr.send(obj.data);
    };
    //(5).注册回调函数
    xhr.onload = function () {
        //获取到数据之后，执行回调函数,将获取的数据通过参数传递给这个回调函数
        obj.success(xhr.responseText);
    };
};


jquery封装函数
$.ajax({
    url:'路径',
    type:'get',//请求方式
    dataType:'json',//请求格式
    data:'',//请求参数
    success: function(backData){
        //接受返回值
    }
});


XML数据格式介绍
//_____________________________________________________________________________________
XML格式特点
    1.XML数据声明格式固定    <?xml version="1.0" encode="UTF-8"?>
    2.XML的标签可以自定义      <city>城市</city
    3.必须都是双标签  
    4.除了顶部声明之外,所有内容都是包裹在一个根标签内部
XML格式弊端
    1.数据传输量比较大
    2.解析繁琐
        jq解析方法     XML格式数据        $('选择器',xml格式的数据).text()
        XML格式的数据不能使用 JSON.parse() 解析


模板引擎  art-template
//_________________________________________________________________________________________
使用流程
    1.导入模板引擎  art-template.js文件   <script src="./libs/template-web.js"></script>
    2.写html模本
    <script id='tpl' type="text/html">
        模板必须写到script标签中
        必须设置id
        必须要设置type  一般为 type='text/html'
    </script>
    3.调用art-template的官方api开始解析模板
    var htmlStr =  template('tpl', jsonObjc.data);
        第一个参数  模板id名
        第二个参数  解析的js对象
        返回值  解析数据之后的html字符串
    4.将解析好的模板显示值页面
    document.body.innerHTML = htmlStr;

template基本语法
1,基本语法对象取值操作   <p>{{ ganmao }}</p>

2.循环语法   $index 下标  $value 数组中每一个元素
{{ each forecast }}
    <li>
        <span>{{ $index }}</span>--
        <span>{{ $value.date }}</span>--
        <span>{{ $value.high }}</span>--
        <span>{{ $value.low }}</span>--
        <span>{{ $value.type }}</span>
    </li>
{{ /each}}

3.分支语法  满足条件就会渲染
{{ if wendu >= 25 }}
<p>今天好热啊,才{{ wendu }}度</p>
{{ else }}
<p>今天好凉快啊,才{{ wendu }}度</p>
{{ /if }}



模板引擎易错点总结
1.导入js文件
    * a.文件路径写错
2.写模板
    * a. script标签的id没有设置
    * b. script标签的type属性写错
        * 一般设置为 text/html
        * 不能不写，也不能是 text/javascript，否则浏览器会以为这是js代码来解析
    * c. 模板语法写错
        * 只要模板语法写错，浏览器就会报错（这是一个固定格式的报错提示,会告诉你出错的位置）
    * d. 模板中对象属性名写错，浏览器不会报错但是数据无法渲染
3.调用api解析渲染模板
    * 参数传错（第一个是模板script标签的id，第二个是要解析的数据js对象）
4.将解析好的模板显示到页面 


ajax补充知识点
//_____________________________________________________________________________
1.1 onreadystatechange
1.onload是新型的浏览器支持
2.如果要兼容更早的浏览器,可以使用onreadystatechange
3.onreadystatechange触发时机   xhr.readyState状态变化


1.2  Ajax工作原理
1. HTTP协议     协议是指规定浏览器跟服务器交互的数据格式
2.浏览器请求  必须是   请求报文
3.服务器响应必须是  响应报文
4.请求报文与响应报文的数据格式如下
    a.请求报文
        请求行    包含请求方法,url  协议版本
        请求头    包含请求的附加信息  有关键字/值组成
        请求体    浏览器发送给服务器的数据  参数

    b.响应报文
        响应行  包含协议版本  状态码  状态码描述
                 1xx, 指示信息, 表示请求已接收, 继续处理
                 2xx, 成功, 表示请求已被成功接收和处理.
                 3xx, 重定向, 表示要完成请求必须进行更进一步操作
                 4xx, 客户端错误, 表示有语法错误或请求无法实现
                 5xx, 服务器端错误, 表示服务器未能实现合法的请求
        响应头  content-type返回的数据格式,jquery自动转json就是根据他来判断
        响应体  服务器响应给浏览器的数据    xhr.responseText

ajax文件操作
//_________________________________________________________________________________
ajax文件预览  图片
//1.给file表单元素注册onchange事件
$('file表单').change(function () {
    //1.2 获取用户选择的图片
    var file = this.files[0];
    //1.3 将文件转为src路径
    var url = URL.createObjectURL(file);
    //1.4 将url路径赋值给img标签的src
    $('img元素').attr('src', url);
});

ajax 文件上传
$('提交按钮').on('click',function(e){
    //禁用表单默认提交事件
    e.preventDefault();
    //创建FormData对象：参数是表单dom对象
    var fd = new FormData('form表单DOM对象')
    $.ajax({
        url:'',
        type:'post',
        dataType:'json',
        data:fd,
        contentType: false,
        processData: false,
        success: function(backData){
        }
    });
});
