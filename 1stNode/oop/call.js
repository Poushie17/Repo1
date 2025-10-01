function emoji(smile){
  this.smile=smile
  console.log('smiled');
}

function setEmoji(smile,sad,wow){
  emoji.call(this,smile)
  this.sad=sad
  this.wow=wow
}

const e1=new setEmoji(":)",":(", ":0")
console.log(e1);
