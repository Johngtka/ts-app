class Dog{
    name = 'Zoe'
    haircolor = ['red','white']
    date = new Date()
    ageCalck(x){
        let y = this.date.getFullYear()
        console.log(y-x)
        return x
    }
    time = this.ageCalck(11)
    possIt(){
        const par = document.createElement('p')
        document.body.appendChild(par)
        par.innerHTML= 'My dog name is '+this.name+' and she is '+this.time+' years old, her hair color is '+'<span style="background-color:#ff9d58;">'+this.haircolor[0].toUpperCase()+'</span>'+' and '+'<span style="border:1px solid #000;">'+this.haircolor[1].toUpperCase()+'</span>'
        par.style.textAlign='center'
        par.classList.add('ts-txt')
        // console.log(this.time)
    }
    iteration = 0
    render(){
        for(let i = this.iteration; i<this.time; i++){
            console.log(i)
            if(i>=this.time-1){
                console.log('End off counting')
            }
        }
    }
}
const D = new Dog()
D.possIt()
D.render()
class time{
    timer = D.date
    DoneClk(){
        let clk = document.createElement('p')
        document.body.appendChild(clk)
        clk.classList.add('timer')
        return clk
    }
    clk(){
        let day = this.timer.getDate()
        let month = this.timer.getMonth()+1
        let year = this.timer.getFullYear()
        let sec = this.timer.getSeconds()
        let clock = this.DoneClk()
        clock.innerHTML ='<i>'+day+'.'+month+'.'+year+' '+sec+'</i>'
    }
}
const C = new time()
C.clk()