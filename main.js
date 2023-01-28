var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'Zoe';
        this.age = 10;
        this.haircolor = ['red', 'white'];
    }
    Dog.prototype.time = function () {
        var date = new Date();
        var y = date.getFullYear();
        console.log(y - this.age);
        document.body.innerHTML = 'My dog name is ' + this.name + ' and she is ' + this.age + ' years old, her hair color is ' + this.haircolor;
    };
    return Dog;
}());
var c = new Dog();
c.time();
