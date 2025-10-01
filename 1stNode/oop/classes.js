class Emoji {
  constructor(smile, sad, wow) {
    this.smile = smile;
    this.sad = sad;
    this.wow = wow;
  }
  showSmile() {
    return `Smile: ${this.smile}`;
  }

  showAll() {
    return `Smiley: ${this.smile}, Sad: ${this.sad}, Wow: ${this.wow}`;
  }
}

const e1 = new Emoji(":)", ":(", ":0");

console.log(e1.showSmile());
console.log(e1.showAll());  
