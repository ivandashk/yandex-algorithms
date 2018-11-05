const selectionSort = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    let lastSortedIndex = initialArray.length;
    while (lastSortedIndex > 1) {
        let localMaxIndex = 0;
        for (let i = 0; i < lastSortedIndex; i++) {
            if (initialArray[i] > initialArray[localMaxIndex]) 
                localMaxIndex = i;
        }
        initialArray.splice(lastSortedIndex - 1, 0, (initialArray.splice(localMaxIndex, 1)[0]));
        lastSortedIndex--;
    }

    console.log(initialArray);
}