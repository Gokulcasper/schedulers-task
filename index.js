// let clearTimeBtn=document.getElementById("clearTimeBtn");
// let counterNumber = document.getElementById("counter");

// let clear = null;
// let count = 0;

// function startTime(){
//     clear =  setInterval(()=>{
//         count =  count+1;
//         counterNumber.innerText=count;
//     },1000)
// }
// clearTimeBtn.onclick=()=>{
//     clearInterval(clear);
//     counterNumber.innerText=""
//     console.log("Cleared")
// }
// startTime();



let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let startBtn = document.getElementById("startBtn");
let counterText = document.getElementById("counterText");
let clear;

function startTimer(from,to){
    let current = from;
counterText.innerText = current;

clear = setInterval(()=>{
    current++;
    if(current > to)
    {
        clearInterval(clear);
        console.log("Clear",clear)
        counterText.innerText='';
    }else{
        counterText.innerText = current;
    }
},1000);
}


function startHandel(){
let fromValue = fromUserInput.value;
let toValue = toUserInput.value;
if(fromValue === '' || toValue === '')
{
    alert("Please enter the both value");
}else{
    let from = parseInt(fromValue);
    let to = parseInt(toValue);
    startTimer(from,to);
}
}

    // setInterval(()=>{
    //     counterText.innerText=parseInt(fromUserInput.value)+1;   
    // },1000)


startBtn.addEventListener('click',startHandel);
