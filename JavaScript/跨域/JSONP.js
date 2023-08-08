window.callback = function(data) {
    console.log(data)
}

// <script src="https://imooc.com/getData.js">
// 返回 callback({x:1,y:2})

// 基于浏览器的执行机制， 请求了 script 中 src的资源以后，会执行内部的代码
