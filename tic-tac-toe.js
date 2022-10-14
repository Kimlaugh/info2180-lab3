function layout()
{
    var board = document.getElementById("board").getElementsByTagName("div");
    for (var division of board)
    {
        division.className = "square";
    }
}
