function getFile() {
    setTimeout(function(){
        console.log(`c`)      
    }, 2000)
}
const p = new Promise();
console.log(p);   // TypeError: undefined is not a function!
const p1 = new Promise('lin');
console.log(p1);   // TypeError: lin is not a function!

// 这个promise 传进去一个函数参数

const p2 = new Promise(()=> {console.log('lan')});
console.log('@2');  // lan  @2  上面的传入的函数参数是一个同步的回调函数.会立即在主线程上执行.

// new Promise(executor函数)  , executor执行器

// promise 对象  ， 这个叫做承诺的对象，有一个叫做状态的属性，我们需要利用它不同的状态。来做不同的对应处理
// 最初是pending，初始化状态，

// executer()函数会接受两个参数, 官方约定的分别用形参: resolve、 reject接收


// 2
// Promise 第一个参数是函数，这个函数是一个执行器。
// 实例化时候自动执行里面的内容.
function loadImg(src) {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img")
        img.onload = function() {  
            resolve(img)
        }
        img.onerror = function() {
            reject(new Error(`loadError ${url}`))
        }
        img.src = src;
    })
}

