const brackets = (str) => {
    const openingBrackets = ['(', '[', '<'];
    const closingBrackets = [')', ']', '>'];

    const charArray = str.split('');

    const stack = [];
    for (let char of charArray) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const index = closingBrackets.indexOf(char);
            if (stack[stack.length - 1] === openingBrackets[index]) {
                stack.pop();
            } else {
                console.log(false);
                return;
            }
        }
    }

    if (stack.length !== 0) {
        console.log(false);
        return;
    }

    console.log(true);
}