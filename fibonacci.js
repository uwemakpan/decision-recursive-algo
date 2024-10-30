// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).

const test = 6

const fibonacciSeries = (num) => {
  if (num === 0 || num === 1) return num
  else return fibonacciSeries(num - 1) + fibonacciSeries(num - 2)
}

console.log(fibonacciSeries(test))
