// Simple revision timer
function startTimer(duration, display){
  let timer=duration, minutes, seconds;
  setInterval(()=>{
    minutes=Math.floor(timer/60); seconds=timer%60;
    display.textContent=`${minutes}:${seconds<10?'0':''}${seconds}`;
    if(--timer<0) timer=duration;
  },1000);
}
