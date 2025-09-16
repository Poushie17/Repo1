const user={}
user.id="1ab12"
user.name="poush"
user.login=true
//console.log(user)
const user2={
    email:"xx@gmail.com",
    fullname: {
        user_name:{
            firstname:"poushie",
            secondname:"Tanzine"

        }
    }
}
// console.log(user2.fullname.user_name.secondname)
const ob1={1:"a",2:"b"}
const ob2={7:"x",8:"y"}
const ob3=Object.assign(ob1,ob2)
//console.log(ob3)
const users_p = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]
//console.log(users_p[2])
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user))
