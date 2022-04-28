// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
let numbers = [1, 2, 3, 4, 5, 6, 7];

function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums: number[], startIndex: number, endIndex: number) {
  for (; startIndex < endIndex; startIndex++, endIndex--) {
    swap(nums, startIndex, endIndex);
  }
}

function rotate(nums: number[], k: number): void {
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, (k % nums.length) - 1);
  reverse(nums, k % nums.length, nums.length - 1);
}

rotate(numbers, 8);

console.log(numbers);
