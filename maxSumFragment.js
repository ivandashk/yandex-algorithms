const maxSumFragment = (str) => {
    if (str === '') return; 

    let initialArray = str.split(',');
    if (initialArray.includes("")) return;
    initialArray = initialArray.map((num) => { return parseInt(num, 10) });

    console.log(initialArray);
}