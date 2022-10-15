function layout()
{
    var board = document.getElementById("board").getElementsByTagName("div");
    for (var division of board)
    {
        division.className = "square";
    }
}

function playGame(){
    var turn = 1;
    var board = document.getElementById("board").getElementsByTagName("div");
    for (const division of board)
    {
        division.addEventListener("mouseover", function(){
            if(division.textContent == ""){
                division.classList.add("hover");
            }
        })

        division.addEventListener("mouseout", function(){
            division.classList.remove("hover");

        })

        division.addEventListener("click", function(){
            if (turn == 1 && division.textContent != "O"){
                division.classList.add("X");
                division.textContent ="X";
                turn = 0;
                whoIsWinner();
            }
            else{
                if (turn == 0 && division.textContent != "X"){
                    division.classList.add("O");
                    division.textContent = "O";
                    turn = 1;
                    whoIsWinner();
                }
            }

        })
    }
}

function whoIsWinner(){
    var board = document.getElementById("board").getElementsByTagName("div");
    var status = document.getElementById("status");
    const division = [];
    division[0] = board[0].textContent;
    division[1] = board[1].textContent;
    division[2] = board[2].textContent;
    division[3] = board[3].textContent;
    division[4] = board[4].textContent;
    division[5] = board[5].textContent;
    division[6] = board[6].textContent;
    division[7] = board[7].textContent;
    division[8] = board[8].textContent;

    if (division[0] == division[1] && division[0] == division[2] && division[0] != ""){
        status.textContent = "Congratulations! " + division[0] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[3] == division[4] && division[3] == division[5] && division[3] != ""){
        status.textContent = "Congratulations! " + division[3] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[6] == division[7] && division[6] == division[8] && division[6] != ""){
        status.textContent = "Congratulations! " + division[6] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[0] == division[4] && division[0] == division[8] && division[0] != ""){
        status.textContent = "Congratulations! " + division[0] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[2] == division[4] && division[2] == division[6] && division[2] != ""){
        status.textContent = "Congratulations! " + division[2] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if  (division[2] == division[5] && division[2] == division[8] && division[2] != ""){
        status.textContent = "Congratulations! " + division[2] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[1] == division[4] && division[1] == division[7] && division[1] != ""){
        status.textContent = "Congratulations! " + division[1] + " is the Winner!";
        status.classList.add("you-won");
    }
    else if (division[0] == division[3] && division[0] == division[6] && division[0] != ""){
        status.textContent = "Congratulations! " + division[0] + " is the Winner!";
        status.classList.add("you-won");
    }
    else{
        if (division[0]!= "" && division[1] != "" && division[2]!= "" &&  division[3]!= "" && division[4]!= "" && division[5] != "" && division[6]!= "" &&  division[7]!= "" && division[8]!= "")
        status.textContent = "Its tied!"
        status.classList.add("you-won");
    }
}

function restartGame()
{
    var reset = document.querySelector("button");
    reset.addEventListener("click", refresh);

}

function refresh()
{
    location.reload();
}

document.addEventListener("DOMContentLoaded",function(){
    layout();
    playGame();
    restartGame();
    
})
