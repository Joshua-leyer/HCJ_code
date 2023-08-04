/**
 * href: J-study/ajax学习/ajax.md
 */

// xhr.open(method, url, async, username, password);


const ajax = (method, path, data, responseCallBack) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, path, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText)
            }
        }
    }
    xhr.send()
}