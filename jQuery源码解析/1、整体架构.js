var myQuery = function (a,b) {
    return new myQuery.fn.init(a,b)  // 实际返回的是init的实例对象
}
myQuery.fn = myQuery.prototype = {  // myQuery有个fn属性指向myQuery的prototype
    init: function (a,b) {
        this.a = a
        this.b = b
        return this
    },
    c: 3
}
console.log(myQuery);
myQuery.fn.init.prototype = myQuery.prototype  // 保证init的对象可以访问myQuery的属性，如c
console.log(myQuery(1, 2).a);
console.log(myQuery(1, 2).b);
console.log(myQuery(1, 2).c);
myQuery.extend = myQuery.fn.extend = function(){
    console.log(this);
}
myQuery.extend()  // this指向myQuery对象，包含了fn属性
myQuery.fn.extend()  // this指向fn对象



