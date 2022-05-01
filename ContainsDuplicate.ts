// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

function containsDuplicate(nums: number[]): boolean {
  let map: { [key: number]: boolean } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = true;
    }
  }

  return false;
}

let arr = [1, 2, 3, 4];
console.log(containsDuplicate(arr));
