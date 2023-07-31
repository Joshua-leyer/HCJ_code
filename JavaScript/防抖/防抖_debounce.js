/**
 * 场景: 监听一个输入框的文字变化后触发 change(可能是别的事件) 事件
 * 问题： 如果直接监听keyup事件，那么事件触发太过于频繁。
 * 解决办法，防抖。只有用户停止输入了才发送请求。  
 */

const log = console.log.bind(console);

const debounceInput = document.getElementById("debounceInput")

let timer = null;


// 练习 1
/*
debounceInput.addEventListener('keyup', function(e) {
    let self = e.target;
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(()=> {
        log(self.value)
        timer = null
    }, 600)
})

*/


/**
 * 
 * @param {} fn 
 * @param {} delay 
 * @returns 
 * 
 */
function debounce(fn, delay=500) {
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            // fn.apply(this, arguments)
            fn()
            timer = null
        }, delay)
    }
}
debounceInput.addEventListener('keyup', debounce(function() {
    log(debounceInput.value)
}), 600)