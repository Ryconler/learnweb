function Person(name) {  // 构造函数Person
    this.name = name
    this.age = 18
    this.showAge = function () {
        console.log(this.age);
    }
}
console.log(Person instanceof Function)  //=true
//函数也是对象，有一个默认prototype属性，指向构造函数的原型对象
Person.prototype.showName = function () {
    console.log(this.name);
}

let person = new Person('zxj')  // person是函数对象
person.showAge()
person.showName()
console.log('name' in person);  //检测能否访问给定属性=true
console.log(person.hasOwnProperty('name'));  //检测一个属性是存在于实例中=true
console.log(person.hasOwnProperty('showName'));  //showName存在于原型中=false


console.log(person.__proto__);  // 内置属性__proto__指向创建它的构造函数的原型对象prototype
console.log(Person.prototype);  // 构造函数的原型对象

