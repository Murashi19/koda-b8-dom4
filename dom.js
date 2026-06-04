const board = document.createElement("div");
board.classList.add("board");

document.body.appendChild(board);

for (let row = 1; row <= 8; row++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let col = 1; col <= 8; col++) {
        const square = document.createElement("div");

        if (row === 1 || row === 3 || row === 5 || row === 7) {
            if (col === 1 || col === 3 || col === 5 || col === 7) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }
        } else {
            if (col === 1 || col === 3 || col === 5 || col === 7) {
                square.classList.add("black");
            } else {
                square.classList.add("white");
            }
        }

        rowElement.appendChild(square);
    }

    board.appendChild(rowElement);
}