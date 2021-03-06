const spiral = (n) => {
    if(n === '') return;

    const matrixSize = parseInt(n);
    const matrix = new Array(matrixSize);
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = new Array(matrixSize).fill(-1);
    }

    const maxElementValue = matrixSize * matrixSize;
    const rules = [[1,0], [0,1], [-1,0], [0, -1]];
    let currentRule = 0;
    let x = -1;
    let y = 0;

    const changeRule = () => {
        if (currentRule < rules.length - 1) {
            currentRule++;
        } else {
            currentRule = 0;
        }
    }

    for (let num = 0; num < maxElementValue; num++) {
        let nextElementX = x + rules[currentRule][0];
        let nextElementY = y + rules[currentRule][1];
        if(nextElementX === matrixSize || nextElementY === matrixSize) {
            changeRule();
            nextElementX = x + rules[currentRule][0];
            nextElementY = y + rules[currentRule][1];
        }
        const nextElement = matrix[nextElementY][nextElementX];

        if (nextElement !== -1) {
            changeRule();
            nextElementX = x + rules[currentRule][0];
            nextElementY = y + rules[currentRule][1];
        }

        x = nextElementX;
        y = nextElementY;
        matrix[nextElementY][nextElementX] = num + 1;
    }

    console.log(matrix);
}