// To-do : Make M+ M- Functional

let string = " ";
let buttons =document.querySelectorAll('.button');
let button_sp =document.querySelectorAll('.button1');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input'
            ).value=string;
        }
        else{
 
            console.log(e.target);
            string =string+e.target.innerHTML;
            document.querySelector('input'
            ).value=string;
        }
     
    })
})
Array.from(button_sp).forEach((button1)=>{
    button1.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input'
            ).value=string;
        }
    })
})