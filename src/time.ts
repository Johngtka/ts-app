import Dog from "./dog";

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
export default Time;
