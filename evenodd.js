var limit = 50;
function printEvenOddNumbers(limit) {
    console.log("even number");
    for (var i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    console.log("odd number");
    for (var i = 1; i <= limit; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
printEvenOddNumbers(limit);
