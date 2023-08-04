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