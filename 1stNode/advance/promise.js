// const p1=new Promise(function(resolve,reject){
//   setTimeout(() => {
//     console.log(':( :(');
//     resolve();
//   }, 1000);

// })

// p1.then(function(){
//   console.log('promise 1')
  
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log(':) :0')
//     resolve();
//   },1000)
// }).then(function(){
//   console.log('promise 2');
// })

const p3= new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username:'poushie',age:20})
  }, 1000);
  
});

p3.then(function(user){
  console.log(user);
})

const p4=new Promise(function(resolve,reject){
  setTimeout(() => {
    let error=true
    if (!error){
      resolve({username:'p1',age:21})
    }
    else{
      reject('error')
    }
    
  }, 1000);
})

p4.then(function user(){
  console.log(user)
  return user.age
}).then(function age(){
  console.log(age);

}).catch(function(error){
  console.log(error);
}).finally(function done(){
  console.log('done and dusted');
})
