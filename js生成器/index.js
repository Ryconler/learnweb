function *foo(x) {
    x++
    console.log('x:',x);
    yield 'yield返回值' // 暂停，返回值
    x+=yield 2 // 暂停并赋值
    console.log(x);
}
let f = foo(0)  // 创建生成器对象用于控制生成器*foo
console.log('第一个yield返回:',f.next().value);  // 启动,运行至第一个yield，返回value
f.next()  // 运行x=x+的赋值语句，暂停至第二个yield
f.next(2)  // 给yield赋值，继续运行至结束

