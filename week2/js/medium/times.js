/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

require("node:perf_hooks").performance;

function calTime(n) {
  let sum = 0;
  console.time(`Timer for ${n}`);
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.timeEnd(`Timer for ${n}`);
}

function perform(n) {
  let start = performance.now();
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  let end = performance.now();

  let timeTaken = end - start;
  console.log(`Time taken for ${n}: ${timeTaken}`);
}

calTime(100);
calTime(100000);
calTime(1000000000);

perform(100);
perform(100000);
perform(1000000000);
