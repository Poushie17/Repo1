const User = {
    _email: 'pp@gmaail',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const p1 = Object.create(User)
console.log(p1.email);
