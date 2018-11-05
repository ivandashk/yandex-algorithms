const combinations = (n) => {
    if(n === '') return;    
    const arrayLength = parseInt(n);
    let initialArray = [];
    for (let i = 0; i < arrayLength; i++) {
        initialArray.push(i + 1);
    }

    const factorial = (arrayLength) => {
        if (arrayLength === 0 || arrayLength === 1) return 1;
        return arrayLength * factorial(arrayLength-1);
    }

    const rearrangement = (orderNum, array) => {
        const length = array.length;
        const result = [];
        
        let i = orderNum;
        for(var pushIndex = 1; pushIndex <= length; pushIndex++) {
            const subFactorial = factorial(length - pushIndex);
            const nextDigitIndex = Math.floor((i + subFactorial - 1) / subFactorial);
            i -= (nextDigitIndex - 1) * subFactorial;

            result.push(array.splice(nextDigitIndex - 1, 1)[0]);
        }

        return result;
    }

    const result = [];
    const activeElements = 0;
    for (let orderNum = 1; orderNum <= factorial(arrayLength); orderNum++) {
        result.push(rearrangement(orderNum, initialArray.slice(0)).join(''));
    }

    console.log(result);
}