const maxSumFragment = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    const fragmentSize = 3;
    if (initialArray.length - fragmentSize < 0) {
        console.log(`Необходим массив минимум из ${fragmentSize} элементов`);
        return;
    }

    const sums = [];
    for (let i = 0; i < initialArray.length - fragmentSize + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + fragmentSize; j++) {
            sum += initialArray[j];
        }
        sums.push(sum);
    }

    const max = Math.max.apply(null, sums);
    const maxIndex = sums.indexOf(max);

    console.log(`Фрагмент из ${fragmentSize} элементов с максимальной суммой ${max} начинается с индекса ${maxIndex}`);
}