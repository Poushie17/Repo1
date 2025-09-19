// function Print(){
//     console.log("printinggg")
// }

// Print()

// function add(n1,n2){
//     console.log(n1+n2)
// }

//add(5,4)

// function add(n1,n2){
//     return n1+n2
// }
// result=add(4,"poushie")
// //console.log(result)

// function loginmesg(username){
//     if (username==undefined){
//         console.log("no username")
//     }
//     return `${username} just logged`
// }

// console.log(loginmesg("x0x0"))

function add(val1,...num){
    return num
}
console.log(add(5,6,7))

const user={
    name: "poushie",
    age: 20

}

function obj(anyobj){
    console.log(`name is ${anyobj.name} age is ${anyobj.age}`)
}

obj(user)

const arr=[200,100,40]

function arrayh(array){
    return array[2]

}

console.log(arrayh(arr))
