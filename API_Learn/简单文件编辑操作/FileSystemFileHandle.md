showDirectoryPicker()
使用这个方法获取到本地文件夹之后返回的是什么，直接 log 出来，
不知道怎么看明白官网，怎么打印出log ，看这个对象下可以有哪些方法可以使用，返回什么数据。
这种面对一个新 API 怎么了解它的过程，自己现在还没有掌握方法。

这种方法必须是具有通用性的，所以也就是需要对所有的API的共性有一个统摄的理解。这种理解，
我是没有的，不知道哪里可以学到。
只是从[MDN - Window：showDirectoryPicker() 方法 ](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/showDirectoryPicker) 这个网页中，没有介绍，
返回的结果后，可以调用哪些方法，

leran Href : [File System Access API：简化对本地文件的访问](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access?hl=zh-cn)

Leran Log >

我在官网看到 showDirectoryPicker() 方法，返回值的小章节中，看到“一个 Promise 对象，会兑现一个 FileSystemDirectoryHandle 对象。”
于是，跑去学习 [FileSystemDirectoryHandle 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/FileSystemDirectoryHandle)
我找到了与values()同等级别类似的方法有哪些。

当我看到要修改文件内容的时候发现使用了.getfile()方法，我寻找这个方法来源的时候，
发现是file对象下的，这里就产生了很多问题，我不知道 file 对象和 DirectoryHandle,
谁是大树的根，那个更靠近根本的原型。

又发现file对象继承自，Blob ，这个好像和原始数据类型有关，二进制格式有关系。
 

