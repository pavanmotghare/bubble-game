let timer = 60;
let score = 0;
hitrn = 0;

function changeScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function changeHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    let clutter = "";

    for(let i=1;i<=102;i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            let playbtn = document.querySelector(".playbtn");
            document.querySelector("#pbtm").innerHTML = `<button class="playbtn">Play</button>`+`<h2>Game Over!  </h2>`+`<h2> Your Score : ${score}</h2>`;
            document.querySelector(".playbtn").addEventListener("click",()=>{
                timer = 60;
                score = 0;
                hitrn = 0;
            })
            playGame();
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",(dets)=>{
    let clickedNum = Number(dets.target.textContent);
    if(clickedNum == hitrn){
        changeScore();
        makeBubble();
        changeHit();
    }
})

function playGame(){
document.querySelector(".playbtn").addEventListener("click",()=>{
    runTimer();
    makeBubble();
    changeHit();
    changeScore();
})
}
playGame();

