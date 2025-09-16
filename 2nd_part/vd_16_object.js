const ss=Symbol("key1")

const user={
    name: "Poushie",
    age:20,
    [ss]:"key1",
    email:"xx@gmail.com",
    login:true

}
// console.log(user.email)
// console.log(user["age"])
// console.log(typeof(user[ss]))
// Object.freeze(user)
// user.email="yy.gmail.com"
// console.log(user)

user.greeting=function(){
    console.log(`HI user ${this.name}`)
}

user.greeting()

