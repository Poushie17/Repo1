

const item=document.getElementById('item')
const list = document.getElementById('list');
const addB=document.getElementById('add')
let taskarr= JSON.parse(localStorage.getItem('task',false)) || []

function prev(){
    list.innerHTML=''
    taskarr.forEach((task,index )=> {
        const li=document.createElement('li')
    
    li.innerHTML = `
    <input type="checkbox" ${task.complete ? 'checked' : ''}>
   
     <span>${task.text}</span>
      <button class="delete" style: text-align:"right">Delete</button>`
    
    const checkbox=li.querySelector('input[type="checkbox"]')
    const textSpan=li.querySelector('span')
     const deleteBtn = li.querySelector('.delete');
    checkbox.addEventListener('change',function(){
        task.complete=this.checked
       localStorage.setItem('task', JSON.stringify(taskarr));
        textSpan.style.textDecoration = this.checked ? "line-through" : "none";
        textSpan.style.textDecorationThickness = this.checked ? "1px" : "initial";
        });


        
        
      textSpan.style.textDecoration = task.complete ? "line-through" : "none";
textSpan.style.textDecorationThickness = task.complete ? "1px" : "initial";



    list.appendChild(li);

    deleteBtn.addEventListener('click', function() {
            taskarr.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(taskarr));
            prev(); 
        });
        
    });
}

addB.addEventListener('click',function(){
    const text=item.value.trim()
    if(text!==''){
    taskarr.push({ text: text, complete: false });
    localStorage.setItem('task', JSON.stringify(taskarr));
    prev()
    
    item.value=''

    
}
})
prev()
