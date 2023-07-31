/**
 * 场景: 拖拽元素，随时拿到元素位置信息 ， 如果单纯的用 drag事件，会导致频繁的触发
 *  
 **/

const log = console.log.bind(console)
const box = document.getElementById("box1");

let timer = null;
/*
box.addEventListener("drag", function(e) {
    if (timer) {
        return 
    }
    timer = setTimeout(() => {
        log(e.clientX, e.clientY)
        timer = null;
    }, 100);
})
*/

function throttle(fn, delay = 100) {
    let timer = null;
    return function () {
        if (timer) return
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer = null;
        }, delay)
    }
}

box.addEventListener('drag', throttle(function(e) {
    // log(e.clientX, e.clientY)
    log(e)
}, 200))

/**
 * 上面的，throttle回调函数，传递进去参数的话，其实是把参数传递给 throttle函数中返回,return出去的那个函数
 */



