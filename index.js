let clearTimeBtn=document.getElementById("clearTimeBtn");
let counterNumber = document.getElementById("counter");

let clear = null;
let count = 0;

function startTime(){
    clear =  setInterval(()=>{
        count =  count+1;
        counterNumber.innerText=count;
// console.log(counterNumber.innerText)
// console.log(count)
    },1000)
}
clearTimeBtn.onclick=()=>{
    clearInterval(clear);
    counterNumber.innerText="0"
    console.log("Cleared")
}
startTime();

