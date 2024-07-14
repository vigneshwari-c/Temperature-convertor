const input=document.getElementById('input');
const button=document.getElementById('button');

button.addEventListener('click',()=>{
    const res=((Number(input.value)*9)/5)+32;
    document.getElementById('result').innerHTML=res+" F";
    //input.value='';
})