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



//思路:
  //1. 获取元素
  //2. 显示隐藏左右焦点按钮
  //3. 开关思想
  //4. 调用函数,使每个图片拥有各自的初始化样式(初始化样式在config中储存)