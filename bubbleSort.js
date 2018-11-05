const bubbleSort = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    let lastSortedIndex = initialArray.length;
    while (lastSortedIndex > 1) {
        for (let i = 0; i < lastSortedIndex; i++) {
            if (initialArray[i] > initialArray[i+1]) {
                const temp = initialArray[i];
                initialArray[i] = initialArray[i+1];
                initialArray[i+1] = temp;
            }
        }
        lastSortedIndex--;
    }
    console.log(initialArray);
}