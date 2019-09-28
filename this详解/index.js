/* this取决于函数被调用的位置 */
// 'use strict'
let a = '全局'
function fun1() {
    let a = 'fun1'
    fun2()  // 函数在fun1中被调用
}
function fun2(){
    console.log(this.a);  // this上下文为fun1
}
fun1()  // 函数在全局调用

let obj = {
    a:'obj',
    fun2: fun2
}
obj.fun2()  // 函数在obj中被调用


