const binarySearch = (n) => {
    if (n === '') return;    
    n = parseInt(n);
    if (n <= 0 || n > 100) return;

    let initialArray = new Array(100);
    let num = 1;
    initialArray = initialArray.fill(0).map(() => { return num++; });

    let iterations = 0;
    let minIndex = 0;
    let maxIndex = initialArray.length - 1;

    const search = (minIndex, maxIndex) => {
        iterations++;
        const middleIndex = Math.floor((minIndex + maxIndex) / 2);

        if (n < initialArray[middleIndex]) {
            maxIndex = middleIndex - 1;
            search(minIndex, maxIndex);
        } else if (n > initialArray[middleIndex]) {
            minIndex = middleIndex + 1;
            search(minIndex, maxIndex);
        } else {
            return;
        }
    }

    search(minIndex, maxIndex);

    console.log(initialArray);
    console.log(`Элемент ${n} найден за ${iterations} итераций`);
}