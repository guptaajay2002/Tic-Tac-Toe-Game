let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let new_btn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg"); 
let turn0 = true;
let count = 0;
const  winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5]
];
const reset_game = () =>{
    turn0 = true;
    enableBoxes();
    msg_container.classList.add("hide");
};

const disableboxes = () =>{
    for(let box of boxes){
       box.disabled = true;
    }
};

const enableBoxes = () =>{
   for(let box of boxes){
      box.disabled = false;
      box.innerText = "";
   }
};

const gamedraw = () =>{
    msg.innerText = `Game is Draw, Try agin.`;
    msg.style.color = "red";
    msg_container.classList.remove("hide");
    disableboxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
      if(turn0){
        box.innerText = "X";
        box.style.color = "red"
        turn0 = false;
        count++;
      }
      else{
        box.innerText = "O";
        box.style.color = "green";
        turn0 = true;
        count++;
      }
      box.disabled = true;
      let isWinner = checkWinner();
      if(count === 9 && !isWinner){
        gamedraw();
      }
    });

    const showWinner = (winner) =>{
        msg.innerText = `Congragulations, Winner is ${winner}.`;
        msg_container.classList.remove("hide");
        disableboxes();
    };

    const checkWinner = () =>{
        for(let pattern of winpattern){
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            } 
        }
    }
    };
    
});

reset.addEventListener("click",reset_game);
new_btn.addEventListener("click",reset_game);
