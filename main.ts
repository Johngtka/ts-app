interface Datas{
    date?: object,
    iteration?: number,
}
class Dog implements Datas{
    private name:string = 'Zoe'
    private haircolor:object = ['red','white']
    public date = new Date()
    private time:number = this.ageCalck(11)
    public iteration = 0
    ageCalck(x:number){
        let y = this.date.getFullYear()
        console.log(y-x)
        return x
    }
    possIt(){
        const par = document.createElement('p')
        document.body.appendChild(par)
        par.innerHTML = 'My dog name is '+this.name+' and she is '+this.time+' years old, her hair color is '+'<span style="background-color:#ff9d58;">'+this.haircolor[0].toUpperCase()+'</span>'+' and '+'<span style="border:1px solid #000;">'+this.haircolor[1].toUpperCase()+'</span>'
        par.style.textAlign = 'center'
        par.classList.add('ts-txt')
    }
    render(){
        this.possIt()
        for(let i = this.iteration; i<this.time; i++){
            console.log(i)
            if(i==this.time-1){
                console.log('End off counting')
            }
        }
    }
}
const A = new Dog()
A.render()
class time extends Dog{
    private timer = this.date //(object from Dog class is a object declared in interface)
    DoneClk(){
        let tim = document.createElement('p')
        document.body.appendChild(tim)
        tim.classList.add('timer')
        return tim
    }
    clk(){
        let day = this.timer.getDate()
        let month = this.timer.getMonth()+1
        let year = this.timer.getFullYear()
        let clock = this.DoneClk()
        clock.innerHTML = `<i>${day}.${month}.${year}</i>`
    }
}
const B = new time()
B.clk()

class main extends time{
    private title: string = 'Calkulator app'
    private flag1: HTMLInputElement = document.querySelector('#l1')
    private flag2: HTMLInputElement = document.querySelector('#l2')
    public iteration = 4
    content(){
        for(let i = this.iteration; i>=1; i--){
            const opt = document.createElement('div')
            opt.setAttribute('id','option'+i)
            this.flag2.insertAdjacentElement('afterend',opt)
            opt.style.display = 'inlone-block'
        }
    }
}
const m = new main()
m.content()