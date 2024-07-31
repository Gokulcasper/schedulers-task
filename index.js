// ========= Clear Counts ===========

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


// ========= Customer Range Counter =========

// let fromUserInput = document.getElementById("fromUserInput");
// let toUserInput = document.getElementById("toUserInput");
// let startBtn = document.getElementById("startBtn");
// let counterText = document.getElementById("counterText");
// let clear;

// function startTimer(from,to){
//     let current = from;
// counterText.innerText = current;

// clear = setInterval(()=>{
//     current++;
//     if(current > to)
//     {
//         clearInterval(clear);
//         console.log("Clear",clear)
//         counterText.innerText='';
//     }else{
//         counterText.innerText = current;
//     }
// },1000);
// }

// function startHandel(){
// let fromValue = fromUserInput.value;
// let toValue = toUserInput.value;
// if(fromValue === '' || toValue === '')
// {
//     alert("Please enter the both value");
// }else{
//     let from = parseInt(fromValue);
//     let to = parseInt(toValue);
//     startTimer(from,to);
// }
// }
// startBtn.addEventListener('click',startHandel);

// ============ Peace Timer ===========

let twentySecondsBtn=document.getElementById("twentySecondsBtn");
let thirtySecondsBtn=document.getElementById("thirtySecondsBtn");
let fortySecondsBtn=document.getElementById("fortySecondsBtn");
let oneMinuteBtn=document.getElementById("oneMinuteBtn");
let timerText=document.getElementById("timerText");
let clear;
function startTimer(time){
    timerText.innerText=time;
    clear  = setInterval(()=>{
        time--;
        if(time <= 0)
        {
            clearInterval(clear);
            timerText.innerText="Your Moment is Completed"
        }
        else{
            timerText.innerText=time
        }
    },1000)
}
function handleTimer(time){
startTimer(time);
}

twentySecondsBtn.addEventListener('click',()=>handleTimer(20));
thirtySecondsBtn.addEventListener('click',()=>handleTimer(30));
fortySecondsBtn.addEventListener('click',()=>handleTimer(40));
oneMinuteBtn.addEventListener('click',()=>handleTimer(60));


//============= Theme ============

let bgContainer = document.getElementById("bgContainer");
let themeUserInput = document.getElementById("themeUserInput");
let heading = document.getElementById("heading");


let lightImg = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkImg  = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event){
    let themeInputValue = themeUserInput.value;
    console.log(themeInputValue);
if(event.key === 'Enter'){
if(themeInputValue==='Light'){
    bgContainer.style.backgroundImage=lightImg;
    bgContainer.style.height="450px";
    bgContainer.style.width="600px";
    bgContainer.style.backgroundSize="cover";
    heading.style.color = 'black';
    themeUserInput.value=' ';
    bgContainer
}else if(themeInputValue==='Dark'){
    bgContainer.style.backgroundImage=darkImg;
    bgContainer.style.height="450px";
    bgContainer.style.width="600px";
    bgContainer.style.backgroundSize="cover";
    heading.style.color = 'White';
    themeUserInput.value=' ';
}else{
    alert('Please enter a valid theme: Light or Dark');
}
}
}
themeUserInput.addEventListener('keypress',changeTheme);
