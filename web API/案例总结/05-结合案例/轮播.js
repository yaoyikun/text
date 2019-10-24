var bbox=document.getElementById('box');
var sbox=document.querySelector('.ad');
var unitWidth=sbox.offsetWidth;
var ul=document.querySelector('.imgs');
var spans=document.querySelector('.square').children;
var arr=document.querySelector('#arr');
var left=document.querySelector('#left');
var right=document.querySelector('#right');
for(var i=0;i<spans.length;i++){
    spans[i].setAttribute('index',i);
    spans[i].onclick=function(){
        for(var j=0;j<spans.length;j++){
            spans[j].removeAttribute('class');
        }
        this.setAttribute('class','current');
        var index=this.getAttribute('index');
        var target=-index*unitWidth;
        animate(ul.target);

    }
}