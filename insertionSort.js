const insertionSort = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    const sortedArray = [];
    const insertValue = (value) => {
        if (sortedArray.length === 0) {
            sortedArray.push(value);
        } else {
            const sortedLength = sortedArray.length;
            for (let i = 0; i < sortedLength; i++) {
                if (sortedArray[i] > value) {
                    sortedArray.splice(i, 0, value);
                    return;
                }
            }
            sortedArray.push(value);
        }
    }

    for (let i = 0; i < initialArray.length; i++) {
        insertValue(initialArray[i]);
    }

    console.log(sortedArray);
}