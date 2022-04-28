// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function shiftArrayToTheLeft(pos: number, nums: number[], length: number) {
  for (let i = pos; i < length - 1; i++) {
    nums[i] = nums[i + 1];
  }
}

function removeDuplicates(nums: number[]): number {
  let uniqueNums = nums.length;
  for (let i = 0; i < uniqueNums - 1; i++) {
    while (nums[i] == nums[i + 1] && i < uniqueNums - 1) {
      shiftArrayToTheLeft(i, nums, uniqueNums);
      console.log(nums);
      uniqueNums--;
    }
  }
  return uniqueNums;
}

console.log(nums);
console.log(removeDuplicates(nums));
