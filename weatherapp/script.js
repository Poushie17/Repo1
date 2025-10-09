const api="6b16eeb49f8aa4253aa794a75b6d26e9";
const city=document.getElementById("city")
const submit=document.getElementById("submit")
const result=document.getElementById("result")

submit.addEventListener('click',async function(){
    const cname=city.value
    if(cname===""){
        result.innerHTML=`enter a city name to check `
        return
    }

    try{
    const response=await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cname}&appid=${api}`)
        if (!response.ok) throw new Error("City Invalid");
    const arr= await response.json()
    const temp=(arr.main.temp-273.15).toFixed(1)
    const condition = arr.weather[0].main;
    const icon = arr.weather[0].icon;
   

    result.innerHTML = `
      <h2>${arr.name}</h2>
      <h3>${temp}°C</h3>
      <p>${condition}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}">
    `;
    }

    catch(error){
        result.innerHTML= error.message

    }
})