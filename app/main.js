class Dog {
    constructor() {
        this.name = 'Zoe';
        this.haircolor = ['red', 'white'];
        this.date = new Date();
        this.time = this.ageCalck(11);
        this.iteration = 0;
    }
    ageCalck(x) {
        let y = this.date.getFullYear();
        console.log(y - x);
        return x;
    }
    possIt() {
        const par = document.createElement('p');
        document.body.appendChild(par);
        par.innerHTML = 'My dog name is ' + this.name + ' and she is ' + this.time + ' years old, her hair color is ' + '<span style="background-color:#ff9d58;">' + this.haircolor[0].toUpperCase() + '</span>' + ' and ' + '<span style="border:1px solid #000;">' + this.haircolor[1].toUpperCase() + '</span>';
        par.style.textAlign = 'center';
        par.classList.add('ts-txt');
    }
    render() {
        this.possIt();
        for (let i = this.iteration; i < this.time; i++) {
            console.log(i);
            if (i == this.time - 1) {
                console.log('End off counting');
            }
        }
    }
}
const A = new Dog();
A.render();
class time extends Dog {
    constructor() {
        super(...arguments);
        this.timer = this.date; //(object from Dog class is a object declared in interface)
    }
    DoneClk() {
        let tim = document.createElement('p');
        document.body.appendChild(tim);
        tim.classList.add('timer');
        return tim;
    }
    clk() {
        let day = this.timer.getDate();
        let month = this.timer.getMonth() + 1;
        let year = this.timer.getFullYear();
        let clock = this.DoneClk();
        clock.innerHTML = `<i>${day}.${month}.${year}</i>`;
    }
}
const B = new time();
B.clk();
class main extends time {
    constructor() {
        super(...arguments);
        this.title = 'Calkulator app';
        this.flag1 = document.querySelector('#l1');
        this.flag2 = document.querySelector('#l2');
        this.iteration = 4;
    }
    content() {
        for (let i = this.iteration; i >= 1; i--) {
            const opt = document.createElement('div');
            opt.setAttribute('id', 'option' + i);
            this.flag2.insertAdjacentElement('afterend', opt);
        }
        return [document.querySelector('#opion1'), document.querySelector('#opion2'), document.querySelector('#opion3'), document.querySelector('#opion4')];
    }
    Calck() {
        let x = this.content();
        const tab = ['+', '-', '*', '/'];
    }
}
const m = new main();
m.Calck();
