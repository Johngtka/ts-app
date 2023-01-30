interface Datas{
    date?: object,
    iteration: number,
}
class main implements Datas{
    private title: string = 'Calkulator app'
    iteration = 1
    view(){
        console.log(this.title)
        const inp1 = document.querySelector('#l1') as HTMLInputElement | null
        const inp2 = document.querySelector('#l2')as HTMLInputElement | null
        inp1?.addEventListener('input',(event)=>{
            const target = event.target as HTMLInputElement
            console.log(target.value)
        })
        inp2?.addEventListener('input',(event)=>{
            const target = event.target as HTMLInputElement
            console.log(target.value)
        })
        let box = document.createElement('div') as HTMLDivElement
        let d= document.body.appendChild(box)
        inp2?.insertAdjacentElement('afterend',d)
    }
}
const m = new main()
m.view()

class Dog implements Datas{
    private name:string = 'Zoe'
    private haircolor:object = ['red','white']
    public date = new Date()
    private time:number = this.ageCalck(11)
    public iteration = 0
    ageCalck(x){
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
        // console.log(this.time)
    }
    render(){
        for(let i = this.iteration; i<this.time; i++){
            console.log(i)
            if(i>=this.time-1){
                console.log('End off counting')
            }
        }
    }
    // call(z:number){
    //     console.log(z/2)
    // }
}
const A = new Dog()
A.possIt()
A.render()
class time{
    private timer = A.date
    // private ref = 4
    // protected papaj = 4*2137
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
        let sec = this.timer.getSeconds()
        let clock = this.DoneClk()
        clock.innerHTML ='<i>'+day+'.'+month+'.'+year+' '+sec+'</i>'
    }
    // fer(x = this.ref){
    //     let z = x*2137
    //     return D.call(z)
    // }
}
const B = new time()
B.clk()
// B.fer()
// class doom extends time{
//     render(){
//         return console.log(this.papaj)
//     }
// }
// const C = new doom()
// C.render()