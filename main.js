var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'Zoe';
        this.haircolor = ['red', 'white'];
        this.date = new Date();
        this.time = this.ageCalck(11);
        // iteration = 0
        // render(){
        //     for(let i = this.iteration;i<=this.time;i++){
        //         console.log(i)
        //     }
        // }
    }
    Dog.prototype.ageCalck = function (x) {
        var y = this.date.getFullYear();
        console.log(y - x);
        return x;
    };
    Dog.prototype.possIt = function () {
        var par = document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = 'My dog name is ' + this.name + ' and she is ' + this.time + ' years old, her hair color is ' + '<span style="background-color:#ff9d58;">' + this.haircolor[0].toUpperCase() + '</span>' + ' and ' + '<span style="border:1px solid #000;">' + this.haircolor[1].toUpperCase() + '</span>';
        par.style.textAlign = 'center';
        par.classList.add('ts-txt');
        // console.log(this.time)
    };
    return Dog;
}());
var c = new Dog();
c.time;
c.possIt();
// c.render()
