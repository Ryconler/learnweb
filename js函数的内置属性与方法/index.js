function fun() {
    // arguments 这个函数接受到的所有参数
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments.callee);  //获取这个函数本身即a()
}
fun(1)

/* apply和call，改变函数运行时的作用域（this） */
let o ={a:1}  //指定一个作用域
function sum() {
    console.log(this); //this为这个函数的作用域
    console.log(this.a);  //默认为undefined
}
sum.apply()  //等于sum()
sum.apply(this)  //指定sum函数运行时作用域this为当前的this，网页中默认为window
sum.apply(o)  //指定sum函数运行时的作用域this为o
sum.call()  //和apply一样，区别在于传参不一样，apply传arguments或数组，call要一个个传


let newSum = sum.bind(o)  //使用bind将创建一个作用域始终为给定的o的函数
newSum()  //函数里面的作用域this始终为o
newSum.call({a:2}) //无法更改，作用域仍为o{a:1}

