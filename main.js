var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'Zoe';
        this.haircolor = ['red', 'white'];
        this.date = new Date();
        this.time = this.ageCalck(11);
        this.iteration = 0;
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
var D = new Dog();
D.possIt();
D.render();
var time = /** @class */ (function () {
    function time() {
        this.timer = D.date;
    }
    time.prototype.DoneClk = function () {
        var clk = document.createElement('p');
        document.body.appendChild(clk);
        clk.classList.add('timer');
        return clk;
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
var C = new time();
C.clk();
