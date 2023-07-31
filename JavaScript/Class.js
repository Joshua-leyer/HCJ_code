class Person {
    constructor(legs) {
        this.legs = legs
    }
    tallMyLegs() {
        console.log(`${this.name}有 ${this.legs} 条腿`)
    }
}

class Student extends Person {
    constructor(legs, name, number) {
        super(legs)
        this.name = name
        this.number = number
    }
    sayHi() {
        console.log(`my name is ${this.name}, number is ${this.number}`)
    }
}

class Teacher extends Person {
    constructor(legs, name, major) {
        super(legs)
        this.name = name
        this.major = major
    }
    teach() {
        console.log(`${this.name}教${this.major}`)
    }
}


const xiaoming = new Student('2', '小明',23)
xiaoming.tallMyLegs()

const liuTeacher = new Teacher('2', '刘贵妃', '数学')
liuTeacher.teach()


xiaoming instanceof Student; // true
xiaoming instanceof Person; // true

[] instanceof Array; // true
[] instanceof Object; // true

let obj = {};
obj instanceof Object; // true

typeof Person // function 
// class 是语法糖

// 隐式原型和显示原型
console.log( xiaoming.__proto__ )  // Person {}
console.log( Student.prototype )   // Person {}
console.log( xiaoming.__proto__ === Student.prototype )  // true 

