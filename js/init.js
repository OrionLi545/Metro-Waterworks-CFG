var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var timeOut = 600 * 1000; //Time limit to return to cover page: 60000ms

// var test = window.location.pathname;
// alert(test);

$(function () {
    $(document).mouseover(function () {
        lastTime = new Date().getTime();
    });
})
//一分钟超时自动跳转指定页面
function toSearchPage() {
    currentTime = new Date().getTime(); 
    if (currentTime - lastTime > timeOut) { 
        window.parent.location.href ="/index.html";//jump back to cover page (index.html)
        //Need a living server at localhost so that this can work (file:// will not work)
    }
}   
window.setInterval(toSearchPage, 1000);