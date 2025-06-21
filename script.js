const countValue=document.querySelector('#counter');

const increment=()=>{
    let value=parseInt(countValue.innerText);
    value=value+1;
    countValue.innerText=value;
};

const decrement = () =>{
// get the vlue from UI
let value = parseInt(countValue.innerText);
//Update the value
value = value - 1;
countValue.innerText = value;
};