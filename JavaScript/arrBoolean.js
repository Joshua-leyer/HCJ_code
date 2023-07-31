/**
 * @joshua
 * key word: 隐式转换
 */

/* Tip

在 JavaScript 中，空数组的布尔值为 `true`。

这是因为在 JavaScript 中，只有以下几种值被视为 falsy 值：

- `false`
- `0`
- `''` (空字符串)
- `null`
- `undefined`
- `NaN`

除了以上这些值，其他值都被视为 truthy 值，
包括空数组 `[]`、空对象 `{}`、
以及非空字符串、数字等等。
因此，空数组的布尔值为 `true`，表示它是一个存在的、非空的值。

*/

// 空数组, 本质上是一个对象. JS中对象 判断布尔的化，默认隐式转换都是 true

const ConArr = [];
let leArr = [];


const log = console.log.bind(console)
if (leArr) {
    log('learr is true')
} else{
    log('learr is false')
}
if (ConArr) {
    log('ConArr is true')
} else{
    log('ConArr is false')
}
