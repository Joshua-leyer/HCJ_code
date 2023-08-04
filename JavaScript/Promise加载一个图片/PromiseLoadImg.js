const url = `https://cdn.pixabay.com/photo/2023/07/22/10/50/ship-8143169_1280.jpg`
const log = console.log.bind(console)

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

loadImg(url)
.then(img => {
    log(img)
})
.catch(err => {
    console.error(err)
})


