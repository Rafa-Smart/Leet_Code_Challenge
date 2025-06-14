var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length - 1; y++) {
      if (nums[y] > nums[y + 1]) {
        let temp = nums[y];
        nums[y] = nums[y + 1];
        nums[y + 1] = temp;
      }
    }
  }

  let terbesar = nums[nums.length - 1];
  if (terbesar + 1 === target) {
    nums.push(target);
    for (let k = 0; k < nums.length ; k++) {
      if (nums[k] === terbesar +1) {
        return k;
      }
    }
  }

  return 1;
};

console.log(searchInsert([1,3,5,6], 5));
