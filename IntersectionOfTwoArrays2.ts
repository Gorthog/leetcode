function intersect(nums1: number[], nums2: number[]): number[] {
  let map = new Map<number, [number, number]>();
  for (let i = 0; i < nums1.length; i++) {
    let [counter, _] = map.get(nums1[i]) ?? [0, 0];
    map.set(nums1[i], [++counter, 0]);
  }

  for (let i = 0; i < nums2.length; i++) {
    let [counter1, counter2] = map.get(nums2[i]) ?? [0, 0];
    map.set(nums2[i], [counter1, ++counter2]);
  }

  let arrayLength = 0;
  for (let key of map.keys()) {
    let [counter1, counter2] = map.get(key) ?? [0, 0];
    let intersectionOccurence = Math.min(counter1, counter2);
    if (intersectionOccurence < 1) map.delete(key);
    else {
      map.set(key, [intersectionOccurence, 0]);
      arrayLength += intersectionOccurence;
    }
  }

  let arr = new Array<number>(arrayLength);

  let index = 0;
  for (let key of map.keys()) {
    let [occurences, _] = map.get(key) ?? [0, 0];
    for (let i = index; i < index + occurences; i++) {
      arr[i] = key;
    }
    index += occurences;
  }

  return arr;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
