function debounce(func, delay) {
    var timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}
// Example usage:
var delayedFunction = debounce(function () {
    console.log('Function debounced!');
}, 1000);
// Call delayedFunction multiple times in a short period
delayedFunction();
delayedFunction();
delayedFunction();
// Only after 1000ms (1 second) from the last call, the debounced function will execute
