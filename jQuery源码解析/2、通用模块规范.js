// Jesse.js
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            global.Jesse = factory()
}(this, function () {
    function Jesse(options) {
        if (!(this instanceof Jesse)) {
            console.log('Jesse is a constructor and should be called with the `new` keyword');
        }
        this.init(options)
    }
    Jesse.prototype.init = function (options) {
        console.log(options);
    }
    // ......
    return Jesse;
}));
