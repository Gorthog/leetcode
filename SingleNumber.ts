function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b);
}

console.log(singleNumber([1, 2, 2, 3, 3, 5, 1]));
