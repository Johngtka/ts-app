class Dog{
    name = 'Zoe'
    age = 10
    haircolor=['red','white']
    time(){
        const date = new Date()
        let y = date.getFullYear()
        console.log(y-this.age)
        document.body.innerHTML = 'My dog name is '+this.name+' and she is '+this.age+' years old, her hair color is '+this.haircolor
    }
}
const c = new Dog()
c.time()