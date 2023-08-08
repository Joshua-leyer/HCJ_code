// 题目
const log = console.log.bind(console);

Promise.resolve().then(()=>{
    log(1)
}).catch(()=> {
    log(2)
}).then(()=> {
    log(3)
})
// 1 3


// 题目
Promise.resolve().then(()=>{
    log(1)
    throw new Error('err')
}).catch(()=> {    // catch 中没有报错， 所以返回的也是一个 resolve 状态的 Promise ，所以下面的 then也会被执行
    log(2)
}).then(()=> {
    log(3)
})
//  1  2  3


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

// 会不会被执行，主要看上一个链式的回调中，有没有报错，注意，核心是上一个有没有抛出错误。


const getData = function() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

const url1 = '/data1.json'
const url2 = '/data2.json'
const url3 = '/data3.json'

getData(url1)
.then(data1 => {
    log(data1)
    return getData(url2)
})
.then(data2 => {
    log(data2)
    return getData(url3)
})
.then(data3 => {
    log(data3)
})
.catch( err => console.err(err) )