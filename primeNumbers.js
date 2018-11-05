const primeNumbers = (n) => {
    if (n === '') return;    
    n = parseInt(n);
    if (n < 2) return;

    const primes = [2];
    for (let i = 3; i <= n; i++) {
        let isPrime = true;

        for (let prime of primes) {
            if (i % prime === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) 
            primes.push(i);
    }

    console.log(primes);
}