interface Datas {
    date?: object;
    iteration?: number;
}
class Dog implements Datas {
    public name: string = "zoe";
    public haircolor: string = "red";
    public date = new Date();

    possIt(): void {
        const par = document.createElement("p");
        document.body.appendChild(par);
        par.innerHTML =
            "My dog name is " +
            this.name.toUpperCase() +
            " and she have " +
            this.haircolor.toUpperCase() +
            " color";
        par.style.textAlign = "center";
        par.classList.add("ts-txt");
    }
}
const A = new Dog();
A.possIt();
class Time extends Dog {
    private timer = this.date;

    DoneClk() {
        let tim = document.createElement("p");
        document.body.appendChild(tim);
        tim.classList.add("timer");
        return tim;
    }

    clk(): void {
        let day = this.timer.getDate();
        let month = this.timer.getMonth() + 1;
        let year = this.timer.getFullYear();
        let clock = this.DoneClk();
        clock.innerHTML = `<i>${day}.${month}.${year}</i>`;
    }
}
const B = new Time();
B.clk();
