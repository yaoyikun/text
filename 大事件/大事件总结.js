后台登录页面技术总结
//入口函数
//点击登录按钮   注意点:表单中的按钮需要阻止默认跳转行为
//获取用户名和密码
//非空判断
//模态框提示空值
//return
//ajax发送请求
//服务器响应后  跳转首页
//判断backData.code
//模态框提示登录成功后消失(调用bootstrap模态框事件)
// 记录token值(本地保存)
//  页面跳转
//失败提醒:模态框backData.msg

后台首页页面技术总结
//入口函数
//ajax发送请求用户信息
//响应后返回参数渲染页面
//退出登录 : 清除token 跳转登录页
//清除做法:   window.localStrage.removeItem('token');
//配置页面间token传值
//js原生做法
//(1).实例化ajax对象
var xhr = new XMLHttpRequest();
//(2).设置请求方法和地址
//get请求的数据直接添加在url的后面 格式是 url?key=value
xhr.open('请求方法', 'url地址');
//在每一个接口，设置请求头发送token
xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
//(3).发送请求
xhr.send();
//(4).注册回调函数
xhr.onload = function () {
    console.log(xhr.responseText)
};
//jquery做法
//全局ajax匹配:每一个$.ajax()都会优先执行这个函数   通常写在导入jq的js文件后面中
$.ajaxSetup({
    //发送ajax之前执行函数
    //函数功能:给ajax设置默认请求头
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    //任何ajax报错都会执行这个函数
    //未登录,弹出提示用户登录并且跳转登录页面
    error: function (xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
        if (error == "Forbidden") {
            alert('请先登录');
            //跳转登录页面
            window.location.href = './login.html';
        }
    }
})
//侧边栏设置
//点击左侧导航栏效果,点击a标签实现高亮效果, 与文章管理下拉框
//给一级列表注册点击事件
//进行颜色样式排他
//判断点击是否为二级列表,文章管理中ul为二级列表,注意此项目中ul与a标签为兄弟关系
//当点击为ul二级列表时触发划入滑出切换
//图标进行旋转    旋转需提前写好样式,尽量使用类名方式切换
//二级列表默认选中第一个样式     老师补充知识点:DOM元素a标签子代方法click();    与DOM元素的onclick和jq元素的click()不同,a标签此方法即可以实现点击效果,又可以触发默认行为
//点击不是文章管理的一级列表时,则移出二级列表的选中样式
//二级列表的点击事件
//进行颜色样式排他

//右侧主体部分:嵌套多网页  iframe标签

嵌套多网页核心原理:
//利用a标签的target属性,target为a标签的跳转方式
//常见的a标签的target三种方式:
//   _self   在当前网页打开
//   _blank  在新网页打开
//   framename   iframe标签中打开  (target属性值对应的name属性值)

//操作步骤:
//(1) 给iframe标签设置name属性值
//(2) 给a标签的target属性设置为iframe标签的name属性值
//实例:
<a href="./index1.html" target="myframe">页面1</a>
<a href="./index2.html" target="myframe">页面2</a>
<a href="./index3.html" target="myframe">页面3</a>
// iframe标签内的src地址为默认显示的页面
<iframe src="./index1.html" frameborder="0" name="myframe"></iframe>



封装沙箱函数http.js
//调用自执行函数  (传值window    实参与形参)
// 声明基地址
//声明地址对象
//接口拼接
//暴露接口  window.对象=对象

个人中心页面
//入口函数
//页面加载发送ajax请求获取当前用户信息
//返回值进行渲染页面
//ajax发送文件预览效果
    //注意传值的修改
//ajax文件上传
    //注意点:创建的FormData对象:参数是表单dom对象,注意传值
    //返回值判断.如返回值backData.code为200,提示用户随机刷新页面

文章类别管理页面
//入口函数
//ajax发送请求获取数据
//返回值为对象,使用模本引擎进行渲染页面
//构建弹出会话模态框--bootstrap模态框的复用:点击新增和编辑都要弹出同一个模态框
    //1.bootstrap 模态框复用:新增按钮和编辑按钮添加行内属性:
    data-toggle="modal" data-target="#myModal"
    //2.如何获取知道点击那个按钮弹出模态框
        //    1. 给模态框注册显示事件show.bs.model 
        //    2. e.relatedTarget:获取触发本次事件的事件源(DOM对象)
    //3.如何知道点击模态框确认,是新增还是编辑
        //    通过判断确认按钮的文字来区分
//弹出模态框
//判断当前事件源是否为新增按钮     注意点判断是需注意同为Dom元素或同为JQ对象
    //判断为新增时,改变模态框的确认按钮的文本改为新增
    //判断为编辑时,改变模态框的确认按钮的文本改为编辑
        //编辑状态下模态框时,需要弹出后输入框文本进行对应  
            // 注意点:这里可以使用e.relatedTarget获取文本
            //       给确认按钮添加属性id  赋值属性为当前事件源的自定义data-id进行赋值
//隐藏模态框
//关闭按钮注册点击事件
//给表单元素重置     注意点:表单元素reset()重置方法是DOM元素点出来的,注意元素转换

// 新增文章及编辑文章
//点击确认事件
//判断当前点击按钮文本
    //如果是新增按钮时发送新曾文章的ajax请求     
        //判断返回值code为201时刷新页面
    //如果是编辑按钮时发送编辑文章的ajax请求
        //判断返回值为code为200时刷新页面

// 删除文章
// 点击删除按钮注册事件    委托事件--原理为事件冒泡, 运用原因:删除按钮为模板引擎动态添加,所以需通过事件委托
//获取当前点击删除的按钮的id值
//ajax发送删除文章请求
//返回成功后刷新页面
