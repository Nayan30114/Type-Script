const limit: number = 50;

function printEvenOddNumbers(limit: number) {
  
     console.log("even number")
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }

    console.log("odd number")
    for (let i = 1; i <= limit; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printEvenOddNumbers(limit);