class Person{  //定义了一个名字为Person的类
    constructor(name){  //constructor是一个构造方法，用来接收参数，new生成对象实例时自动调用
        this.name = name  //this代表的是实例对象
        this.age = 18
    }
    showAge(){  //类的方法，不要加上function
        console.log(this.age);
    }
}
Person.prototype.showName = function () {  // 类Person的本质仍是构造函数，其原型对象仍然能使用
    console.log(this.name);
}

let person = new Person('zxj')
person.showAge()
person.showName()