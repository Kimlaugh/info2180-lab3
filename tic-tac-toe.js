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