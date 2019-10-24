//2.获取页面滚出去的距离,封装成一个函数
function getPageScroll() {
  return {
    scrollLeft:
      window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft ||
      0,
    scrollTop:
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
  };
}
