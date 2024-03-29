JavaScript高级(注意点)
----------------------------yaoyikun      ----------------------------------------


    关键字的作用
//_________________________________________________________________________________-
*****in关键字
//in的三个作用:(针对数组和对象)
//1.for in 进行数组及对象遍历
//2.语法:  "属性名/方法名" in 对象      对象中是否含有此属性及方法   返回值为布尔类型
//3.语法:  数字   in   数组名          判断一个数组中是否含有"数字"的下标 
//补充:  数组.indexOf(元素)       判断数组中是否含有某个元素,用indexOf方法,如果有返回值为下标,没有返回值为-1

*****delete关键字
//delete的两个作用:
//语法:  delete 变量名              可以删除没有用var声明的变量(全局变量)
//语法:  delete  对象名.成员名      可以动态删除对象成员(属性/方法)


*****instanceof关键字
//语法:  对象 instanceOf 构造函数
//作用:判断这个构造函数的prototype属性在不在这个对象的原型链上,如果在就返回值true
console.log(arr instanceof Array);  //true  




*****数据类型检测
//1.typeof(检测基本数据类型   除null,返回object)还可以用来检测Function
    //语法:
        //typeof 检测内容
        //typeof(检测内容)

//isArray([])  检测数组类型

//instanceof
    //语法:   对象 instanceof  构造函数
    //判断这个构造函数的protoytpe在不在这个对象的原型链上
*****万能数据类型检测
//Object.prototype.toString.call(检测数据);





面向对象的应用
//____________________________________________________________________________________-
*****面向对象编程
//面向对象和面向过程一样,都是一种解决问题的思路
//面向对象:注重结果    其实就是面向过程的一种封装
//面向过程:注重过程

//对象的理解
//对象和数组,变量一样,都是用来存放数据的  对象用属性及方法进行存储
//抽象化/具体化   对象是一个具体的存在


*****面向对象语言三大特性: 封装, 继承, 多态
//js没有多态,js不是面向对象语言,是一种基于对象的语言   js中没有多态
//封装:就是将功能封装整合对象内,只对外界暴露接口API 使用时,只需考虑接口用法,而不需考虑具体实现
//继承:js中继承是对象之间的继承,如果对象A想拥有对象B的成员,那就可以让对象A继承对象B 


*****继承
//方法:
//混入式:遍历赋值,就是给A对象添加成员  
//遍历B  赋值   对象A[key]=对象B[key]
for (var key in wangjianlin) {
    wangsicong[key] = wangjianlin[key];//实际上是给wangsicong这个对象添加成员
}

//替换原型式:
// 对象A.prototype=对象B

//混合式:
// 遍历B  赋值  对象A.prototype[key]=对象B[key];  //给A对象原型添加成员

//借用构造函数继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
function Student(name,age,score) {  
    //借用构造函数继承
    //用上下文的模式调用Person这个函数,把Person这个函数里面的this改成new关键字创建出来的那个对象.
    //调用函数要去执行函数的函数体.
    //Person.call(this,name,age);
    //Person.apply(this,[name,age]);
    Person.bind(this)(name,age);
}



原型链
//____________________________________________________________________________
*****原型prototype
//原型:构造函数被创建时,系统会自动为我们创建一个与之对应的对象
//作用:就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，而实例对象可以视作         从原型对象衍生出来的子对象
//语法:   构造函数.prototype
//原型的特性:对象添加属性及方法(一般为实例化出来函数共有的属性及方法   共有的数据才可以向原型中添加)
//访问原型中成员:
//原型自己可以访问
//原型对应的构造函数实例化出来的对象
//原型访问成员(方法/属性)原则:
//如果对象自己有这个成员,那就访问自己的
//如果对象自己没有这个成员,才去访问原型的
//访问原型(往原型中添加数据,修改原型中数据)一定遵守  构造函数.prototype格式
//原型替换:
//实例化对象访问原型中的成员,是访问修改之前还是修改之后:取决于实例化对象是修改原型之前出来,还是修改之后出来

*****实例化对象.__proto__
//属于对象的属性,指向创建的对象的构造函数的原型
//使用注意:.__proto__不是标准的w3c属性,是ie的,虽然现在浏览器都支持它,但是开发中不要用它去访问原型


*****原型.constructor
//是属于原型对象的属性,指向原型的构造函数
// prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。
//constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的
//使用注意:当原型发生替换时,constructor指向会丢失,可以使用原型的属性方法重新指向  constructor:构造函数

*****原型链
//概念:每一个对象都有原型,原型又是对象,所以原型又有原型,那就形成了链式结构,成为原型链
//作用:对象访问成员的访问规则

*****内置对象的原型链
//数组对象的原型链
//实例化arr对象.__proto__  == Array.prototype
//实例化arr对象.__proto__.__proto__  == Object.prototype
//注意点:实例化对象arr调用toString()得到结果格式和实例化obj对象调用的toString()方法得到的不是一样的,分别调用各自原型的方法
//Date对象的原型链
//实例化date对象.__proto__  == Date.prototype
//实例化date对象.__proto__.__proto__   ==  Object.prototype
//Function对象
//实例化test对象.__proto__  ==  Function.prototype
//实例化test对象.__proto__.__proto__  == Object.prototype
//构造函数对象
//例  Function Student(){}
//构造函数Student.__proto__ ==  Function.prototype
//构造函数Student.__proto__.__proto__ == Object.prototype


*****原型链尽头(处null)  Object.prototype
//意味着js的对象都可以访问Object.prototype的成员
//Object.prototyope成员介绍
// 1  hasOwnProperty()
//判断属性方法 是否是 对象自己的(原型中不算) ,如果是自己的返回true 否则返回false
var obj = {
    name: '洋洋',
    age: 18
}
obj.__proto__.sb = function () {
    console.log('我是原型对象中的sb方法...');
}
console.log(obj.hasOwnProperty("name"));//true
console.log(obj.hasOwnProperty("age"));//true
console.log(obj.hasOwnProperty("sb"));//false

// 2  isPrototypeOf()
//判断一个对象是否是另一个对象的原型
var obj1={'name':"1"};
var obj2={'name':"2"};
obj2.__proto__=obj1;   //将obj2的原型改成obj1
console.log(obj1.isPrototypeOf(obj2))  //true

//3  propertyIsEnumerable()
//判断属性/方法是否是属于自己
//判断属性/方法能否被遍历
//满足上边两个条件才返回true  //不常用

//4 toString()
//5 valueOf()



*****普通函数及构造函数
//普通函数和构造函数都是函数
//都可以直接调用  直接调用那函数中的this就是window
//都可以配合new关键字调用  ,new关键字配合调用那函数中的this就是new关键字创建出来的对象
//构造函数的名首字母一般大写



*****静态成员和实例成员
//静态成员:构造函数直接点出来的成员/属性/方法     prototype   Math.random();
//实例成员:实例化对象点出来的成员/属性/方法     .__proto__    arr.push()



js高级方法
//__________________________________________________________________________-___________
*****闭包
//概念:就是声明在一个函数内部,可以访问函数内部的局部变量的这么一个函数
//定义在一个函数内部的函数，静态保存所有了父级作用域的内部函数
function test() {
    var num = 10;
    function test2() {
        console.log(num);
    }
    return test2;
}
// 调用test函数会得到一个返回值,返回值是test2这个函数本身,所以这里的fn就相当于test2本身
var fn = test();
// 调用fn  相当于调用test2
fn()

*****闭包的作用
//01:提升变量的生命周期(变量的生命周期:从声明到回收)
//局部变量:从声明这个局部变量开始,到声明他的函数执行完毕结束
//全局变量:从声明到程序结束被回收
//02.声明在函数内部的局部变量,在函数外面不能访问  可以使用闭包访问
//03.提供有限的访问权限
function test1() {
    var num = 10;
    function getNum() {
        return num;
    }
    function setNum(value) {
        //这里是一个函数,那就可以写任意代码,那就可以写限制赋值代码
        if (value > 1 && value <= 140) {
            num = value;
        }
    }
    return {
        getNum: getNum,
        setNum: setNum
    };
}
var obj = test1(); //调用test1函数会得到一个对象,这个对象里面有2个函数,一个getNum,一个setNum
obj.setNum(100);
//调用test函数会的到对象,对象里封装的两个函数


*****闭包的使用注意
//使用的局部变量每次都是同一个,那外部这个函数就只需调用一次 
//fn()调用时,只是重复调用赋值项,并没有重新调用计算项
//使用的局部变量每次都不是同一个,那外部变量函数就调用多次  
//fn()()重复调用时,反复调用计算项

//js是单线程程序,js同时只能运行一个代码
//js把代码分为主要代码和次要代码(一般回调函数为次要代码,要等到主要代码实现完毕后执行次要代码)

// 闭包实现计时器
for (var i = 0; i < 10; i++) {
    setTimeout((function (num) {
        function inner() {
            console.log(num);
        }
        return inner;
    }(i)), 2000);
}


//打印台倒数
var data = [];
var index = 0;
var a = 0;
for (var i = 0; i < 10; i++) {
    data.push(i);
    index = i;
}
var timeId = setInterval(function () {
    var b = index - a;
    console.log(b)
    if (b == 0) {
        clearInterval(timeId);
    }
    a++;
}, 2000);

//沙箱模式
//作用:
//分割作用域,避免全局变量污染
//模块式开发
(function (w) {
    function Snake() { }
    w.Snake = Snake;
}(window))
//将window作为参数传入使用,而不是直接使用window
//如果不传直接使用会导致破坏函数的封装性
//只需暴露Api即可

*****递归
//概念:就是函数自身调用自己  条件:一定要有结束条件的时候才有意义

//利用递归,闭包完成斐波那契数列第n位性能低下问题
function creatFB() {
    var obj = {};
    function getFB(n) {
        // 要先去obj这个对象中看看,这个n为以前是否求过,如果求过就直接取值,如果没求过再求
        if (obj[n] != undefined) {
            //进到这里就说明当前n位以前处理过,可以直接返回
            return obj[n];
        } else {
            //进到这里说明当前n位没有求过
            if (n == 1 || n == 2) {
                obj[n] = 1;//这句话把当前求出的这个n位值存进obj这个对象
                return 1;
            } else {
                obj[n] = getFB(n - 1) + getFB(n - 2);  //存起来
                return obj[n];
            }
        }
    }
    return getFB;
}




函数Function
//____________________________________________________________________________________
*****函数的普通三种执行方式: 判断this的指向   共同特点为里面的this无法进行更改
//口诀:不管函数/方法如何声明   要看函数/方法,谁调用了这个函数方法,那这个函数/方法中的this就是谁

//1.普通函数调用
function test() { }
window.test();
//window调用  this的指向就是window
new test();
//new 关键字配合使用时,this就是new关键创建出来的那个对象


//2.作为方法调用:这个方法中的this就是调用这个方法的对象
var obj = {
    name: 'lele',
    sayHi: function () {
        console.log(this.name);
    }
}
obj.sayHi()
//当前的this就是obj这个对象


//3.作为构造函数调用
function Student(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}
window.Student('name', 18);  //window调用,this指向为window
var s = new Student('name', 18);  //new关键字配合调用时,this指向创建出来的对象




*****函数的特殊调用方法: 函数的上下文调用模式   call()  apply()  bind()
//使用注意:三种方法是定义在Function.prototype中
    //意味着js中所有函数中都可以调用三种方法


//call()
//语法:  函数名.call(this的新指向,arg1,arg2.....);
function test(num1, num2) {
    console.log(num1 + num2);
}
test(10, 20);
test.call(obj, 100, 200);   //重新赋值参数

//apply()   只有两个参数
//语法:  函数名.apply(this的新指向,数组或伪数组);
function test(num1, num2) {
    console.log(num1 + num2);
}
test.apply(obj, [100, 200]);
//会把数组或者伪数组中的元素,一次交给test函数的形参

//bind()
//语法:  函数,名.bind(this的新指向[arg1,arg2.....])
function test(num1, num2) {
    console.log(num1 + num2)
}
var fn = test.bind(obj, 20, 30);
fn();
//bind()的特点:不会执行当前的函数,而会返回和函数一样的函数,但是this指向已经发生改变的函数

*****函数对象内成员
//caller  
//如果函数b是在函数a找那个调用的,那函数b的caller就是这个函数a
//如果函数b是直接调用,而不是在函数里面调用,那这个函数b的caller就是null


//length
// 形参个数
function test1(num1,num2,num3,num4,num5,num6){
    console.log('sb');
    console.log(test1.length);
}


//name 
//函数的名字
var fn = function(){
    console.log(fn.name);
}
fn();

// __proto__
//实例化对象指向原型

//arguments
//是一个伪数组,是个对象
//里面存放实参的值
//与形参一一对应

// arguments.callee就是函数本身

function test1(num1,num2){
    console.log(arguments);
    console.log(test1.arguments);//伪数组,存的还是实参值
    console.log(arguments === test1.arguments);//false
}




正则表达式
//____________________________________________________________________________-
*****正则表达式   RegExp   复杂类型
    //概念:用事先定义好的一些特定好的字符,及特定字符组合,组成一个'规则字符串'   用来表达对其他字符串的一中过滤逻辑

//正则对象的test方法
    //语法:正则对象.test(需要判断的字符串);
    //作用:判断这个字符串满不满足这个正则的要求,如果满足返回true 否则返回false

//创建正则表达式对象
    //方法1:  使用构造函数  
    var reg1=new RegExp('男|女');
    //判断小括号里面的字符串是否含有男或女  如果有返回true

    //方法2:  使用字面量方式创建正则对象
    var reg2=/男|女/;
    var res=reg2.test('你是啥');

*****预定义类
//概念:事先赋予一些含义的字符
//说明:
        //  /./.test()  除了换行及回车之外的任意字符
            //如果检测的字符串里面包含  除了换行符及回车之外的任意字符,,返回值true  否则返回false

        //   /\d/.test()   数字字符
            //检测字符串中含有数字类型  就是true  没有就是false

        //     /\D/.test()   非数字字符
            //test检测,只要被检测的字符串中含有非数字字符,那就是true

        //    /\s/.test()    不可见字符   标识符,空格space   只要含有就是true
                //  console.log(/\s/.test("\r\n\t\r"));  //true
                //  console.log(/\s/.test("abcdeg"));  //false

        //    /\S/.test()    可见字符     只要含有就是true
            // console.log(/\S/.test(" "));  //false
            // console.log(/\S/.test("\r\n\t\r"));  //false

        //    /\w/.test()    单词字符(所有字母及数字和_)   只要含有就是true
                // console.log(/\w/.test("!@#$%#@_#$%$#@")); //true
                // console.log(/\w/.test("!!!!!1234567")); //true

        //    /\W/.test()    非单词字符(所有字母及数字和_)   只有含有就是true
            //检测字符串中里面如果有非单词字符,返回值就是true

//参数预定义类:
    //  i   忽略大小写   console.log(/a/i.test("A")); //true
    //  g  全局匹配      
    //  gi   全局匹配+忽略大小写

*****自定义类
//      /自定义字符/.test(检测字符)   console.log(/d/.test("123d")); //true


//  exec  正则对象的exec方法,提取满足正则规则的第一个
        //加g全局也不能提取所有,如果提取所有姚用match方法
        //如果字符串里面没有这个正则内容,那就返回null.
        var arr =  /\d{3}/g.exec("哈哈哈111呵呵呵222嘿嘿333");
        console.log(arr);    //[111]
        var arr1 =  /\d{3}/g.exec("哈哈哈呵呵呵嘿嘿");
        console.log(arr1);   //null


//1 或和优先级    |   ()
    //用test检测字符串中,如果含有|两边的字符就是true

// 2.简单类 []  简单类代表一个字符    [123]  中a可以 b可以  c可以    任意一个
    //console.log(/y[abc]z/.test("ycz")); //true

// 3 .负向类   [^  ]   负向类是中括号里的下尖尖
    //如果用test检测字符串是,有中括号的内容以外的任意一个,出现一次或者一次以上,就是true
    //console.log(/[^abc]/.test('abcabcd')); //true     bcd

// 4. 范围类   [a-zA-Z0-9]

//  5. 组合类
    //console.log(/[^0-5][^a-g]/.test("6z")); //true

// 6  边界    /^  /会匹配或者字符串起始位置    
    // console.log(/\d/.test("aaabb123ccc")); //true  预定义类，只要检测的字符串中出现了数字就是true.
    // console.log(/^\d/.test("aaabb123ccc")); //false   如果检测的字符串的起始位置是数字就是true.
     // console.log(/^\d\D/.test('6u66665'));//true
     //  console.log(/^6.a/.test("66abat ")); //true
     //  console.log(/^6.a/.test("6*abat ")); //true
     //  console.log(/^6+a/.test("6666a77776abbbb")); //true
// 尾部边界     /   $/会匹配行或字符串的结尾位置
    //  console.log(/ac/.test("ac777")); //true
    //  console.log(/ac$/.test("ac777")); //false
    //  console.log(/ac$/.test("777ac")); //true
//严格匹配
//^$组合在一起,就表示严格匹配  只能是他不能有别的东西,并且他只能出现一次     有且只有一次
    // console.log(/^heima$/.test("heimaheima")); //false
    // console.log(/^heima$/.test("heima")); //true
    // console.log(/^heima$/.test("heima1")); //false

//量词
    //  " * " 重复0次或更多  x>=0    {0,}
    //  " + "重复一次或更多次 x>=1   {1,}
    //  " ? "重复一次或多次   x=(0|1)  {0,1}
    //   {n} n次 x=n
    //   {n,} 重复n次或者更多  x>=n
    //   {n,m}     n<x<m

//验证汉字
    //[\u4e00-\u9fa5]

正则表达式的字符串方法
//replace(被替换,替换);

//-match  提取
//提取数字
var str = "张三：1000，李四：5000，王五：8000。";
var arr = str.match(/\d+/g); //提取返回的是一个数组
console.log(arr);
//提取邮箱
var str = "123123@xx.com,fangfang@valuedopinions.cn 286669312@qq.com 2、emailenglish@emailenglish.englishtown.com楼主好人一生平安 286669312@qq.com...";
var arr = str.match(/\w+@\w+(\.\w+)+/g);
console.log(arr);


//分组提取
    //提取email中的每一部分
    // var str = "123123@xx.com.cn哈哈哈,penglin@qq.com";
    // var reg = /(\w+)@(\w+)\.(\w+)(\.\w+)?/g;

//字符串方法  -search检索字符串   返回值为数字
    //找到第一次出现数字的位置
var str = '彭亿鹏100徐尔200雷世民300';
var res = str.search(/\d+/);
console.log(res);

//字符串方法 分割字符串 split   返回值为数组