function muti(data) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(data)
        }, 1000)
    })
}

const dataArr = [1, 2, 3]

dataArr.forEach((i)=>{
    console.log(i)
    console.log(muti(i))
})
