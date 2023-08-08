## 资料
- [尚硅谷-promise部分的课程](https://www.bilibili.com/video/BV17U4y1n7qd/?spm_id_from=333.337.search-card.all.click&vd_source=d91978ae5c46d3cddb533eb8dfa0a7bb)
- [ES6 => Promise](https://www.bilibili.com/video/BV17U4y1n7qd?p=7&vd_source=d91978ae5c46d3cddb533eb8dfa0a7bb)


## 概念
promise 是为了解决callback hall ，地狱回调诞生的。

Promise “承诺” ， 一个承诺。在实例化Promise的时候传递的回调函数里面的内容就是，



把本来一层层的调用形式，给拉成链式调用的形式。每一个嵌套调用的方法，都向调用者返回this.带着上一次调用的结果，进入下一个环节。

函数对象： 函数本来就是个对象类型
实例对象: new 构造函数或类产生的对象


回调函数的分类
    同步回调函数：立即在主线程上执行，不会放入任务队列中
    异步回调函数： 不会立即执行，会先放入任务(回调)队列中

这里涉及的知识很多
任务队列event queue，事件循环，JS运行机制，宏任务，微任务

[JavaScript同步和异步](https://segmentfault.com/a/1190000013039660?utm_source=sf-similar-article)

[同步回调函数和异步回调函数-推荐](https://www.cnblogs.com/still-smile/p/12048078.html)



**new Promise(executor函数)  , executor执行器**

promise 对象  ， 这个叫做承诺的对象，有一个叫做状态的属性，我们需要利用它不同的状态。来做不同的对应处理
最初是pending，初始化状态，

executer()函数会接受两个参数, 官方约定的分别用形参: resolve、 reject接收
    1. 调用resolve() 函数,会让promise实例状态变为fulfilled状态.同时可以指定成功的value
    2. 调用reject() 函数,会让Promise实例状态变为rejected状态.同时可以指定失败的reason


看一个代码例子
```js
// 题目
Promise.resolve().then(()=>{
    log(1)
    throw new Error('err')
}).catch(()=> {    // 由于上面有一个报错， 这里会被执行，但是这个本身没有报错，最下面的 catch不会执行
    log(2)
}).catch(()=> {   // ! 注意这里不会被执行.
    log(3)
})
// 1  2 
```
执行.then()  还是.catch() ，主要是看上一个链式函数中有没有报错，导致Promise的状态被修改，核心是根据Promise的状态判断执行哪一个.

