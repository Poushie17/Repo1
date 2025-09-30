const user ={
    username: "pp",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function(){
        console.log("got details from db");
        console.log(`usernam: ${this.username}`);
         }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log((`welcome ${this.username}`));
       }
    return this

}

const user1 =  new User("p1",21,true)
const user2 = new  User("p2",22,false)


console.log(user1);
console.log(user1.constructor);//[Function: User]


