# project related link

# project link
[click here]()

# solution code

## project 1
```javascript
const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    if(e.target.id==="pink"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="lightskyblue"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="maroon"){
      body.style.backgroundColor=e.target.id;
    }
  })

})
```
## projecrt 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#result')

if(height===''|| height<0 || isNaN(height)){
    result.innerHTML=`enter a valid height`


}
else if(weight=== ''|| weight<0 || isNaN(weight)){
    result.innerHTML=`enter a valid weight`
    

} else {
    const heightInM = height / 100; 
    const BMI = (weight / (heightInM * heightInM)).toFixed(2);

    let category = '';
    if (BMI < 18.5) {
      category = 'Underweight';
    } else if (BMI < 24.9) {
      category = 'Normal weight';
    } else if (BMI < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

   
    result.innerHTML = `
      Your BMI is ${BMI} <br>
      Category: ${category} <br>
    `;
  }
});

```
