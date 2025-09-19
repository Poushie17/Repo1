const user={
    name:"poushie",
    age:20,
    greet: function(){
        console.log(`${this.name},Welcome!`)
        console.log(this)

    }
} 
// user.greet()
// user.name="xo"
// user.greet()
// console.log(this)

// function f1(){
//     let name="xoxo"
//     console.log(this.name)
// }
// f1()

// const f1=function(){
//     let name="xoxo"
//     console.log(this.name)
// }
// const f1= ()=>{
//     let name="xoxo"
//    console.log(this)
//  }
//  f1()

// const add=(n1,n2)=>{
//     return n1+n2

// }

const add=(n1,n2)=>n1+n2
console.log(add(5,6));
