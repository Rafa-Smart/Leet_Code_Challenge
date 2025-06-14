var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length-1; i++) {
    if(nums[i] === target ){
        return i
    } else {
        return 1
    }
  }
};