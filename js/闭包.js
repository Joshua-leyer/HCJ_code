/**
 * https://www.youtube.com/watch?v=71AtaJpJHw0&ab_channel=techsith
 * 
 * 
 * https://zh.javascript.info/closure
 * 
 */

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
