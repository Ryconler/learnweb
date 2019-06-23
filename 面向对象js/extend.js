function Father() {
    this.f2=console.log("father's f2")
}
Father.prototype.f1=console.log("father's f1")  //用类的原型创建成员并赋值

function Child() {
    this.c1=console.log("child's c1")
}
Child.prototype=new Father()    //继承Father

var child=new Child()
child.f1
child.f2
child.c1



