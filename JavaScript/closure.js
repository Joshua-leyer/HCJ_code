/**
 * https://www.youtube.com/watch?v=71AtaJpJHw0&ab_channel=techsith
 * 
 * 
 * https://zh.javascript.info/closure
 * 
 */

// 通常有两个场景需要考虑闭包

// 函数作为返回值
function create() {
    let a = 100;
    return function() {
        console.log(a)
    }
}

const fn = create()
const ad = 200;
fn();  // 100


// 函数作为参数传递





// 闭包，变量的查找，是在函数定义的地方，向上级作用域； 不是在执行的地方。

pas = 3
let addTo = function() {
    var inner = 2;
    return  pas + inner;
}

let a = 1;
function add() {
    console.log(a)
}

console.dir(addTo)

