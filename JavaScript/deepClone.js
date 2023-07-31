
let obj1 = {a:1, b:2}
console.log('toString' in obj1)  // true , in 会追踪父对象
console.log(obj1.hasOwnProperty('toString')); // false,  只会判断对象本身是否拥有某个属性


/**
 * 
 * @param {object} obj 拷贝对象 
 * @returns 
 */
function DeepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }

    let result = obj instanceof Array ? [] : {};
    /* 或者下面易懂的
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    */

    for (let key in obj) {
        // 保证 key 是 obj 本身的属性，而不是从原型上继承的
        if (obj.hasOwnProperty(key)) {
            result[key] = DeepClone(obj[key])
        }
    }

    return result;
}


const objTest = {
    a: 1,
    b: 2,
    name: {
        firstName: 'hello',
        lastName: 'world'
    }
}

let copyObj = DeepClone(objTest)
console.log(`DeepClone obj is:`, copyObj)