let myName = "Coke"
let myChannel = "None"

console.log(myName.trueLength); // undefined

let myFriends = ["Ali","Sara","Tanzin"]

let friends = {
    Ali: "1st part",
    Sara: "2nd part",
    Tanzin :"3rd part",
    getT: function(){
        console.log(`this  is ${this.Tanzin}`);
    }
}
friends.getT()

Object.prototype.mirror = function(){
    console.log(`mirror is present in all obj`);
}
Array.prototype.hey = function(){
    console.log(`say hello`);
}

myFriends.mirror()
friends.mirror()

myFriends.hey()

const user = {
    name:"Coke",
    email:"coke@gmail.com"
}
const teacher = {
    makeVdo : true
}

const teachingSupport ={
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    _proto_:teachingSupport
}

teacher._proto_ = user

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "coke   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"blah ".trueLength()
"  x0x0 ".trueLength()
