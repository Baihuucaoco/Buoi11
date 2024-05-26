// Dong goi
class Animal{
    constructor(type, height){
        this.type = type
        this.height = height
    }
    show(){
        console.log(`This is ${this.type}, which ${this.height} tall`);
    }
}
let dog = new Animal("Dog", "1m")
let cat = new Animal("Cat", "60cm")
dog.show()
cat.show()

// Ke thua
class Cat extends Animal{
    constructor(type, height, name){
        super(type, height)
        this.name = name
    }
    sound(){
        console.log("Nygga Nygga I catch Mickeygga");
    }
    catch(){
        console.log("Destroy nigga mouse");
    }
}
let aln = new Cat("Nygga", "0.5m", "American Police")
aln.show()
aln.sound()
aln.catch()