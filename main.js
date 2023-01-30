var main = /** @class */ (function () {
    function main() {
        this.title = 'Calkulator app';
        this.iteration = 1;
    }
    main.prototype.view = function () {
        console.log(this.title);
        var inp1 = document.querySelector('#l1');
        var inp2 = document.querySelector('#l2');
        inp1 === null || inp1 === void 0 ? void 0 : inp1.addEventListener('input', function (event) {
            var target = event.target;
            console.log(target.value);
        });
        inp2 === null || inp2 === void 0 ? void 0 : inp2.addEventListener('input', function (event) {
            var target = event.target;
            console.log(target.value);
        });
        var box = document.createElement('div');
        var d = document.body.appendChild(box);
        inp2 === null || inp2 === void 0 ? void 0 : inp2.insertAdjacentElement('afterend', d);
    };
    return main;
}());
var m = new main();
m.view();
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'Zoe';
        this.haircolor = ['red', 'white'];
        this.date = new Date();
        this.time = this.ageCalck(11);
        this.iteration = 0;
        // call(z:number){
        //     console.log(z/2)
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
    Dog.prototype.render = function () {
        for (var i = this.iteration; i < this.time; i++) {
            console.log(i);
            if (i >= this.time - 1) {
                console.log('End off counting');
            }
        }
    };
    return Dog;
}());
var A = new Dog();
A.possIt();
A.render();
var time = /** @class */ (function () {
    function time() {
        this.timer = A.date;
        // fer(x = this.ref){
        //     let z = x*2137
        //     return D.call(z)
        // }
    }
    // private ref = 4
    // protected papaj = 4*2137
    time.prototype.DoneClk = function () {
        var tim = document.createElement('p');
        document.body.appendChild(tim);
        tim.classList.add('timer');
        return tim;
    };
    time.prototype.clk = function () {
        var day = this.timer.getDate();
        var month = this.timer.getMonth() + 1;
        var year = this.timer.getFullYear();
        var sec = this.timer.getSeconds();
        var clock = this.DoneClk();
        clock.innerHTML = '<i>' + day + '.' + month + '.' + year + ' ' + sec + '</i>';
    };
    return time;
}());
var B = new time();
B.clk();
// B.fer()
// class doom extends time{
//     render(){
//         return console.log(this.papaj)
//     }
// }
// const C = new doom()
// C.render()
