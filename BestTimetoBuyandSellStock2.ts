// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

const prices = [7, 1, 5, 3, 6, 4];
// const prices = [1, 2, 3, 1, 5];
// const prices = [7, 6, 4, 3, 1];
// const prices = [1, 2, 3, 4, 5];
// const prices = [3, 3];

function maxProfit(prices: number[]): number {
  let minIndex = 0,
    maxIndex = 0;
  let profit = 0;
  while (minIndex < prices.length - 1) {
    minIndex = findMinPoint(minIndex, prices);
    maxIndex = findMaxPoint(minIndex, prices);
    if (prices[maxIndex] - prices[minIndex] > 0) {
      profit += prices[maxIndex] - prices[minIndex];
    }
    minIndex = maxIndex;
  }

  return profit;
}
function findMinPoint(startIndex: number, prices: number[]): number {
  let i = startIndex;
  while (prices[i + 1] <= prices[i]) {
    i++;
  }

  return i;
}

function findMaxPoint(startIndex: number, prices: number[]): number {
  let i = startIndex;
  while (prices[i + 1] >= prices[i]) {
    i++;
  }

  return i;
}

console.log(maxProfit(prices));
