let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
   turn0 = true;
   enableBoxes(); 
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {

    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "X";
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
msg.innerHTML = `Congratulation, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
            let position1 = boxes[pattern[0]].innerText;
            let position2 = boxes[pattern[1]].innerText;
            let position3 = boxes[pattern[2]].innerText;
            if(position1 !="" && position2 !="" && position3 !=""){
                if(position1 === position2 && position2 === position3){
                    showWinner(position1);
                }
            }
    }
};

resetBtn.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);