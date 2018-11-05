const chess = () => {
    const chessboardSize = 8;
    const positions = new Array(chessboardSize).fill(-1);
    const maxPositions = new Array(chessboardSize).fill(-1);

    const isCellBanned = (i, j) => {
        for (let queen = 0; queen < positions.length; queen++) {
            if (positions[queen] === -1) break;
            if (positions[queen] === j) return true;
            if (Math.abs(j - positions[queen]) === Math.abs(i - queen)) return true;
        }
        return false;
    }

    while (positions.includes(-1)){
        const newRow = positions.indexOf(-1);

        let isQueenPlaced = false;
        for (let column = maxPositions[newRow] + 1; column < chessboardSize; column++) {
            if (!isCellBanned(newRow, column)) {
                positions[newRow] = column;
                maxPositions[newRow] = column;
                isQueenPlaced = true;
                break;
            } else {
                continue;
            }
        }

        if (!isQueenPlaced) {
            positions[newRow - 1] = -1;
            maxPositions[newRow] = -1;
        }
    }

    console.log(positions);

    // Далее - визуализация ответа (массива positions)

    const queen = "O";
    const empty = " ";

    const board = new Array(chessboardSize);
    for (let i = 0; i < chessboardSize; i++) {
        board[i] = new Array(chessboardSize).fill(empty);
        board[i][positions[i]] = queen;
    }

    console.log(board);
}
