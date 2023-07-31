// 下面的代码执行顺序，输出顺序是什么？
// A : 当遇到await 的时候就会执行这一行，但是不执行之后的代码，等到 这个await 返回数据的时候，才会返回来执行下面的，
// 这里 需要知道 事件循环机制 才能够理解这里。

async function getInfo(a) {
    console.log(`getInfo start`)
    await setTimeout(()=> {
        console.log('得到信息', a)
    }, 2000)
    console.log('D')
}

console.log('A')
getInfo('B')
console.log('C')





