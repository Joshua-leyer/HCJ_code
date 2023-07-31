class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector);
        // for (let i = 0; i < result.length; i++) {
        //     this[i] = result[i]
        // }
        for (let e of result) {
            this[i] = e
        }
        this.length = result.length;
    }
    getElement(index) {
        return this[index]
    }
    each(fun) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fun(elem)
        }
    }
    onEvent(type, fun) {
        return this.each(elem => {
            elem.addEventListener(type, fun, false)
        })
    }
}

// 插件

jQuery.prototype.dialog = function (info) {
    alert(info)
}

// 造轮子

class myJquery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    addClass(className) {
        
    }
}

