const mergeSort = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    const sort = (array) => {
        if (array.length === 0) {
            return [];
        }
        if (array.length === 1) {
            return [array[0]];
        }

        const pivotIndex = Math.floor(array.length / 2);
        const leftPart = sort(array.slice(0, pivotIndex));
        const rightPart = sort(array.slice(pivotIndex));

        return merge(leftPart, rightPart);
    }

    const merge = (leftPart, rightPart) => {
        let leftIterator = 0;
        let rightIterator = 0;

        const sorted = [];
        while (sorted.length < leftPart.length + rightPart.length) {
            if (leftIterator === leftPart.length) {
                sorted.push(rightPart[rightIterator++]);
                continue;
            }
            if (rightIterator === rightPart.length) {
                sorted.push(leftPart[leftIterator++]);
                continue;
            }

            if (leftPart[leftIterator] <= rightPart[rightIterator]){
                sorted.push(leftPart[leftIterator++]);
            } else {
                sorted.push(rightPart[rightIterator++]);
            }
        }
        return sorted;
    }

    console.log(sort(initialArray));
}