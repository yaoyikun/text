js变量
//______________________________________________________________________--
js变量的命名
//方法:驼峰命名法:
    //全部小写   
        //单词与单词之间使用下划线隔开
    //大小写混合  
        //大驼峰:每个单词首字母大写
        //小驼峰:第一个单词首字母小写,其他字母大写
//规则:
    //首字符:英文字母获取下划线
    //组成:英文字母,数字,下划线
    //禁忌:js关键字及保留字

js变量的声明
//显示声明:var 变量名
//禁忌:
    //没有类型
    //重复声明
    //隐式声明
    //不声明直接赋值
//正确:先声明,后读写   先赋值,后运算

js变量的类型
//值类型:
     //占用空间固定,保存在栈中
     //保存与复制的是本身
     //使用typeof检测数据的类型
     //基本类型数据是值类型
//引用类型
    //占用空间不固定,保存在堆中
    //保存与复制的是指向对象的this指针
    //使用instanceof检测数据类型
    //使用new()方法构造出来的对象是引用型

js变量的作用域
//全局变量
    //包含:
        //函数体外定义的变量
        //函数内部定义无var 的变量
    //调用    任意位置
//局部变量
    //包含:
        //函数内部使用var声明的变量
        //函数的参数变量
    //调用:   函数内部
//两者优先级
    //局部变量高于同名的全局变量
    //参数变量高于同名全局变量
    //局部变量高于同名参数变量       局部>变量>全局
//特性
    //全局变量是全局对象的属性
    //局部变量是调用对象的属性
    //作用域链:
        //内层函数可以访问外层函数的局部变量
        //外层函数不能访问内层函数的局部变量
    //变量的生命周期:
        //全局变量:除非被显示删除,否则一直存在
        //局部变量:子声明起至函数运行完毕或显示删除
        //回收机制
            //标记清除
            //引用计数

js的流程控制
//______________________________________________________________
循环语句
// while()
    //语法:while(条件表达式){循环执行代码}
    // 流程
        //判断条件表达式的值
        //当值为true时循环执行代码执行函数体
        //当值为false式,退出循环体
    //特性:
        //先检查条件,在执行代码
        //条件不满足时则循环一次,也不执行
    //时机:一个动作被重复执行到满足某个条件时
//do{}-while()
    //语法:do{循环体执行代码}while(循环体)
    //流程:
        //先执行循环体内代码段在进行判断
        //如果表达式值为true,则反复执行代码
        //如果表达式值为false,则退函数体
    //特性:
        //先执行循环体,在进行条件判断
        //循环体内代码至少执行一次
    //时机:一个动作至少被执行一次

// for()
    //语法:for(循环变量=初值;循环条件;递增/减计数器){执行代码}
    //流程:
        //用循环变量初始值与循环条件相比较,确定返回值
        //如果返回值为true则执行循环体
        //执行完一次后进行递增/递减运算
        //将运算结果与循环条件相比较
        //true执行循环体
        //false退出循环体
    //时机:重复一个动作到一定次数时    


js函数
//_______________________________________________________________
函数定义方法
//静态方法
function 函数名([形参列表]){
    函数体;
    return 函数返回值;
}
//动态匿名方法
var 函数名=new Function([形参列表],'函数体');
//直接量
函数名=function([形参列表]){
    函数体;
}


函数的调用方法
//直接调用   函数名(实参);
//html中     <a href="javascript:函数名()"></a>
//事件中调用    事件类型=函数名();
//递归调用:
     //定义:函数内部调用函数自身
     //格式:function 函数名(){函数名()}

函数的方法
//apply(this的新指向,数组或伪数组);
    //将函数作为对象的方法调用
    //将参数一数组形式传递给该方法
//call(this新指向,参数...)
    //将函数体作为对象的方法调用
    //将指定的参数传递给该数组
//toString()返回函数的字符串表示

函数的arguments对象
//功能:存放实参的参数列表,伪数组,不具有数组的方法
//特性:
    //仅能在函数体内使用
    //带有下标的属性,但是不是数组
    //函数声明时自动初始化
//自带属性
    //length:返回函数实参的长度
    //callee返回当前正在指向的函数

函数的参数
//参数类型
    //实参:调用函数时传递给函数的实际参数
    //形参:定义函数时使用的参数,用于接收调用该函数传递的实参
//特性:
    // 个数不限制
        //实参<形参    多余形参=undefined
        //实参>形参    多余实参被忽略
    // 参数数据类型不被限制
    //通过argements对象访问参数数组
    //参数始终按值传递
        //基本类型:传值
        //引用类型:传址
函数的指针标识
//this  指向的当前操作的对象
//callee  指向参数集合所属函数
//prototype  指向函数附带的原型对象
//constructor  指向创建该对象的构造函数