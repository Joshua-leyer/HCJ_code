// setTimeout 笔试题
const log = console.log.bind(console);

log(1)
setTimeout(()=> {
    log(2)
},1000)
log(3)
setTimeout(function(){
    log(4)
},0)
log(5)



let imgDom = document.createElement('img');
imgDom.onload = function() {
    log("loaded")
}
imgDom.src = "/xxx.png"
log("img load done!")


