var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var timeOut = 30 * 1000; //设置超时时间：1分钟
$(function () {
    $(document).mouseover(function () {
        lastTime = new Date().getTime();
    });
})
//一分钟超时自动跳转指定页面
function toSearchPage() {
    currentTime = new Date().getTime(); 
    if (currentTime - lastTime > timeOut) { 
        window.parent.location.href ="index.html";//跳转指定页面;
        //TODO: 不同层级的页面跳转需要一个中转页面
    }
}   
window.setInterval(toSearchPage, 1000);