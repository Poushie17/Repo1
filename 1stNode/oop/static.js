class account{
  constructor(name) {
    this.name=name
  }
  log(){
    console.log(`logged in ${this.name}`);
  }
  static hi(){
    console.log(`hi `);
  }
}

const n1=new account("popcorn")
// n1.log("popcorn")
// account.hi()

class id extends account{
  constructor(name,email){
    super(name)
    this.email=email
  }
}

const nid=new id("p11","p11@gmial.com")
nid.log()
id.hi()
